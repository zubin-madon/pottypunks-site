import React from 'react'

function Roadmap() {
  return (
    <div className="text-center">
      <h1 className="text-4xl">Roadmap</h1>

      <section class="body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap m-3">
            <div class="flex-column">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-lg font-medium title-font mb-2">
                  FREE(+gas) MINT
                </h2>
                <p class="leading-relaxed text-base text-gray-400 ">
                  5555 PottyPunks to be minted via a gas optimized contract. No
                  hustling for waitlist, no bullshit!
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap m-3">
            <div class="flex-column">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-lg font-medium title-font mb-2">ROYALTIES</h2>
                <p class="leading-relaxed text-base text-gray-400 ">
                  Royalties start at 10% and will be reduced to 2.5% in steps,
                  after every 50ETH volumes traded.
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap m-3">
            <div class="flex-column">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-lg font-medium title-font mb-2">POTTY DAO</h2>
                <p class="leading-relaxed text-base text-gray-400 ">
                  Formation of the DAO after 200 ETH volume traded. Further
                  details regarding the functions of the DAO TBA.
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap m-3">
            <div class="flex-column">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-lg font-medium title-font mb-2">STAKING</h2>
                <p class="leading-relaxed text-base text-gray-400 ">
                  Staking contract to be deployed after 400ETH volumes traded.
                  Details TBA shortly.
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap m-3">
            <div class="flex-column">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-lg font-medium title-font mb-2">Pottyverse</h2>
                <p class="leading-relaxed text-base text-gray-400 ">
                  Metaverse integration and gamification coming soon. Some sneak
                  previews will be released post mint in our Discord.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Roadmap;