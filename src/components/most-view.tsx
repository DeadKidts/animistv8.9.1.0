import { mostView } from "@/lib/metrics"
import React from "react"
import Link from "next/link"
import MostViewCard from "./most-view-card"
import { transformedTitle } from "@/lib/utils"

export default async function MostView() {
  const mostViewAnime = await mostView()

  return (
    <div className="w-full pt-5 xl:w-80 xl:pt-0">
      <div className="block w-full">
        <h3 className="mb-2 flex pr-4 text-[15px] font-medium uppercase md:text-lg">
          <div className="mr-2 h-6 w-2 rounded-md bg-primary md:h-8"></div>
          Most Watch in AnimeHi
        </h3>
        <div className="bg-background/80">
          <ul className="">
            {mostViewAnime.map((mostView, index) => (
              <li
                key={mostView?.id}
                className="relative flex w-full items-center justify-between border-b py-4"
              >
                <Link
                  href={`/anime/${transformedTitle(mostView.title)}/${mostView.anilistId}`}
                  aria-label={mostView.title}
                  className="relation group flex h-full w-full items-center justify-between rounded-md bg-card/80 transition-all hover:scale-105"
                >
                  <MostViewCard result={mostView} rank={index + 1} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
