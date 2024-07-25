<template>
  <main>
    <!-- home details -->
    <section class="mt-16">
      <div class="container mx-auto px-5">
        <div class="flex items-start justify-between gap-4 mb-16">
          <div class="border-l-4 border-primary pl-8">
            <h1 class="font-bold text-4xl">
              1 Bed in The Links East, The Greens and Views
            </h1>
            <p class="text-xl mt-3">Chicago, IL 606543</p>
          </div>
          <div class="flex items-center gap-1 font-bold">
            <router-link class="transition-all hover:text-primary" to=""
              >Home</router-link
            >
            <span>/</span>
            <router-link class="transition-all hover:text-primary" to=""
              >Properties</router-link
            >
            <span>/</span>
            <p class="text-gray-400">
              1 Bed in The Links East, The Greens and Views
            </p>
          </div>
        </div>
        <swiper
          :modules="modules"
          :navigation="true"
          :pagination="true"
          :autoplay="{
            delay: 4500,
            disableOnInteraction: false,
          }"
          :slides-per-view="1"
          :space-between="0"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <div>
              <img
                alt="bg"
                src="../assets/img/slide-1.jpg"
                class="w-full h-full"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <img
                alt="bg"
                src="../assets/img/slide-2.jpg"
                class="w-full h-full"
              />
            </div>
          </swiper-slide>
        </swiper>
        <div>
          <div class="flex items-center gap-3 py-5 text-gray-600 border-b mb-8">
            <div class="flex items-center gap-1 font-semibold">
              <p class="flex gap-1">758 <span>sq.ft</span></p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4"
              >
                <path
                  d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
                />
                <path
                  d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
                />
              </svg>
            </div>
            <span>|</span>
            <div class="flex items-center gap-1 font-semibold">
              <p class="flex gap-1">Ready</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"
                />
                <path
                  d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
                />
              </svg>
            </div>
            <span>|</span>
            <div class="flex items-center gap-1 font-semibold">
              <p class="flex gap-1">#1106</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-door-open"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"
                />
                <path
                  d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"
                />
              </svg>
            </div>
            <span>|</span>
            <div class="flex items-center gap-1 font-semibold">
              <p class="flex gap-1">1</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                data-name="Group 978"
                viewBox="0 0 52.8 41.435"
                class=""
              >
                <g data-name="Group 977">
                  <path
                    d="M101.431 178.552a1.145 1.145 0 00-.038.17c-.068 1.265-.086 1.283-1.334 1.284h-4.024c-.752 0-.944-.2-.944-.967v-6.5c0-2.283.646-3.164 2.856-3.838 0-1.269-.006-2.555 0-3.841a4.486 4.486 0 01.094-1.064 2.645 2.645 0 012.6-2.013c3.952-.015 7.9-.008 11.857-.005a2.937 2.937 0 012.123.949 3.262 3.262 0 012.694-.96c3.612.022 7.225.008 10.838.009a2.775 2.775 0 013.066 3.055v3.87c.316.069.6.11.865.193a3.089 3.089 0 012.161 2.9c.019 2.472.01 4.945 0 7.417 0 .554-.225.786-.786.79a437.02 437.02 0 01-4.721 0 .683.683 0 01-.771-.757v-.694zm26.522-6.494a3.233 3.233 0 011.81-3.036c.107-.055.162-.3.163-.455q.019-1.934 0-3.868a1.476 1.476 0 00-1.675-1.638q-5.657-.005-11.314 0a1.485 1.485 0 00-1.684 1.681v7.316zm-13.989 0c0-2.564.013-5.071-.007-7.577a1.415 1.415 0 00-1.558-1.418q-5.793-.01-11.585 0a1.426 1.426 0 00-1.576 1.558c-.012 1.057.027 2.115-.014 3.17-.026.678-.03 1.28.786 1.5a1 1 0 01.338.258 3.288 3.288 0 011.054 2.511zm13.973 1.346h-26.506v3.782h26.506zm4.961 5.281c.028-.06.055-.091.055-.122 0-2.271.03-4.543 0-6.814a1.691 1.691 0 00-1.217-1.607 1.836 1.836 0 00-2.466 1.841c-.021 2.111-.007 4.222 0 6.332a2.6 2.6 0 00.054.37zm-36.52-.008h3.666a.887.887 0 00.05-.185c0-2.219.023-4.438-.016-6.656a2.156 2.156 0 00-.428-1.123 1.744 1.744 0 00-2.019-.576 1.844 1.844 0 00-1.248 1.817c-.01 1.861 0 3.722 0 5.583v1.14"
                    data-name="Path 1647"
                    transform="translate(-81.459 -138.572)"
                  ></path>
                  <path
                    d="M26.557 17.267a2.386 2.386 0 01-4.613 0h-2.683c-.432 0-.76-.164-.793-.62a5.863 5.863 0 012.975-6.021 15.442 15.442 0 012.044-.783c-.094-.524-.166-1.14-.317-1.736a8.858 8.858 0 00-7.816-6.779 8.617 8.617 0 00-8.673 5.651 9.5 9.5 0 00-.662 3.234c-.052 9.836-.034 19.673-.035 29.51 0 .121.023.242.04.42h4.567c.419 0 .719.181.735.609.017.46-.295.659-.729.679-.107.005-.215 0-.322 0H.724c-.432-.025-.744-.216-.723-.683.019-.435.325-.6.738-.6h3.955v-.757-28.6A10.464 10.464 0 018.95 1.948a9.793 9.793 0 0115.061 4.61 32.884 32.884 0 01.9 3.4c.154.036.447.091.734.172a5.7 5.7 0 014.166 5.388c.051 1.745.051 1.745-1.664 1.745zm1.978-1.316a4.376 4.376 0 00-2.3-4.186 4.159 4.159 0 00-4.648.285 4.324 4.324 0 00-1.834 3.9zm-3.463 1.367h-1.649a1.006 1.006 0 001.649 0"
                    data-name="Path 1648"
                  ></path>
                  <path
                    d="M144.566 88.166a2.083 2.083 0 01.229-.506c.43-.472.864-.942 1.328-1.379a.588.588 0 01.936.065c.275.342.157.65-.139.939-.393.383-.736.823-1.153 1.176a1 1 0 01-.743.2c-.179-.034-.309-.321-.458-.492"
                    data-name="Path 1649"
                    transform="translate(-123.843 -73.739)"
                  ></path>
                </g>
              </svg>
            </div>
            <span>|</span>
            <div class="flex items-center gap-1 font-semibold">
              <p class="flex gap-1">1</p>
              <svg
                id="Layer_1"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 33.69 30.32"
              >
                <g>
                  <path
                    id="Path_130"
                    data-name="Path 130"
                    d="M0,9.58H1.11V25.8h1.69V7.3c0-.84-.28-1.11-1.11-1.11h-.56v2.22H0v-2.68c0-.46,.2-.66,.66-.67H1.82c1.02-.07,1.92,.64,2.08,1.65,.01,.06,.03,.11,.03,.12,.55-.03,1.08-.08,1.61-.07,.97,0,1.78,.73,1.9,1.69,.26,2,.52,4.01,.75,6.01,.02,.42,0,.84-.05,1.25h1.4v-.46c-.04-.31,.19-.6,.5-.64,.04,0,.08,0,.12,0H27.63c.75-.13,1.45,.38,1.58,1.12h.78c1.08-.02,1.97,.84,1.99,1.92,0,.02,0,.03,0,.05,.01,.93,.01,1.87,0,2.8-.02,.27-.06,.54-.12,.81,0,.01,.02,.02,.03,.03,1.1,.11,1.9,1.09,1.79,2.19,0,.02,0,.04,0,.06v5.93c0,.64-.17,.81-.81,.8-.55,.02-1.1,0-1.64-.06-1.2-.17-2.2-.99-2.6-2.14-.04-.11-.08-.22-.12-.33q-.28-.84-1.18-.84c-.47,0-.94,0-1.4,0-.03,0-.06-.02-.08-.03v-1.07h6.7c0-.92,.02-1.81-.01-2.69-.05-.38-.36-.67-.74-.69-.1,0-.21-.01-.31,0H3.96v3.36H24.68v1.13h-.41c-6.14,0-12.27,0-18.41,0-.31,0-.46,.08-.53,.39-.07,.28-.17,.56-.28,.83-.49,1.28-1.71,2.14-3.08,2.16-.43,0-.86,0-1.3,0-.46,0-.66-.21-.67-.67V9.57h-.01Zm3.94,11.77H30.06c.44-.01,.8-.37,.8-.82,.02-.95,.01-1.89,0-2.84,0-.41-.29-.75-.69-.81-.33-.02-.66-.02-.99,0v2.66c0,.48-.2,.69-.67,.69H10.21c-.46,0-.66-.21-.66-.67,0-.78,0-1.57,0-2.35v-.33H3.95v4.47Zm10.09-2.27h14.01c0-.98-.02-1.94,0-2.9,0-.35-.09-.45-.45-.45-4.41,.01-8.81,.01-13.22,0h-.35v3.34ZM3.93,15.69s.07,.02,.11,.03h1.96c.86,0,1.18-.34,1.07-1.18-.23-1.9-.47-3.8-.71-5.69-.1-.76-.36-.98-1.13-.98h-.28c-.72,0-1.03,.31-1.03,1.02v6.8Zm6.76,.05v3.32h2.22v-3.32h-2.22ZM1.14,29.17c1.32,.34,2.67-.44,3.01-1.76,.04-.14,.06-.29,.07-.44H1.14v2.2Zm31.39-2.2h-3.09c.12,1.36,1.31,2.37,2.68,2.25,.14-.01,.28-.04,.42-.07v-2.18Z"
                  ></path>
                  <path
                    id="Path_131"
                    data-name="Path 131"
                    d="M27.58,2.59c-.15,.19-.23,.42-.38,.48-.82,.34-1.48,.99-1.82,1.81-.11,.26-.42,.39-.68,.28-.12-.05-.22-.15-.28-.28-.34-.82-.99-1.47-1.82-1.81-.26-.12-.38-.42-.26-.68,.05-.12,.16-.22,.28-.27,.81-.34,1.45-.98,1.79-1.79,.11-.27,.41-.4,.68-.29,.13,.05,.24,.16,.29,.29,.33,.81,.98,1.46,1.79,1.79,.15,.07,.24,.29,.39,.48Zm-1.95,.01l-.72-.72-.72,.71,.72,.73,.73-.72Z"
                  ></path>
                  <path
                    id="Path_132"
                    data-name="Path 132"
                    d="M17.05,4.85c-.18,.21-.27,.43-.44,.5-.79,.32-1.42,.95-1.74,1.74-.1,.28-.4,.42-.68,.33-.16-.05-.28-.18-.33-.33-.33-.79-.96-1.41-1.74-1.74-.28-.1-.42-.41-.31-.69,.06-.15,.18-.27,.34-.32,.78-.32,1.4-.94,1.72-1.72,.09-.28,.39-.44,.68-.35,.17,.05,.3,.19,.35,.35,.32,.78,.94,1.4,1.72,1.71,.17,.07,.28,.31,.45,.51Zm-2.69,.72l.73-.72-.72-.72-.72,.72,.72,.72Z"
                  ></path>
                  <path
                    id="Path_133"
                    data-name="Path 133"
                    d="M21.2,8.22c.21,.17,.45,.26,.52,.42,.32,.8,.96,1.44,1.76,1.77,.46,.2,.43,.73,0,1,0,0-.02,.01-.03,.02-.79,.3-1.41,.92-1.72,1.71-.1,.28-.4,.43-.68,.34-.16-.06-.29-.19-.34-.35-.32-.77-.93-1.37-1.69-1.69-.29-.09-.45-.39-.37-.68,.05-.18,.19-.32,.37-.37,.77-.31,1.38-.93,1.69-1.7,.08-.17,.3-.28,.5-.46Zm.74,2.68l-.71-.73-.72,.72,.71,.73,.72-.73Z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-10">
            <div class="col-span-4">
              <div class="sticky top-7">
                <div class="flex items-center gap-1">
                  <p>purchase price</p>
                  <p class="text-primary font-bold text-xl">AED 1,718,000</p>
                </div>
                <div
                  class="rounded-3xl border inline-flex items-center gap-2 py-2 px-4 mt-4"
                >
                  <p>investors</p>
                  <p class="font-bold text-lg">795</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-people text-gray-600"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
                    />
                  </svg>
                </div>
                <div>
                  <div class="bg-gray-200 h-4 mt-5 rounded-3xl">
                    <div class="bg-primary w-10/12 h-full rounded-3xl"></div>
                  </div>
                  <div class="mt-3 flex items-center justify-between font-bold">
                    <div class="text-gray-500">AED 221,934 available</div>
                    <div class="flex items-center gap-1 text-primary">
                      <p>89% funded</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-lightning-charge-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="border-y py-5 mt-5">
                  <div class="bg-gray-200 rounded-lg py-5 px-4">
                    <div class="flex items-center justify-between gap-3 mb-5">
                      <div
                        class="flex items-center justify-between gap-2 font-bold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-info-circle"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                          />
                          <path
                            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                          />
                        </svg>
                        <p>48.65%</p>
                      </div>
                      <p class="text-gray-700">5 year total return</p>
                    </div>
                    <div class="flex items-center justify-between gap-3 mb-5">
                      <div
                        class="flex items-center justify-between gap-2 font-bold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-info-circle"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                          />
                          <path
                            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                          />
                        </svg>
                        <p>9.73%</p>
                      </div>
                      <p class="text-gray-700">Yearly investment return</p>
                    </div>
                    <div class="flex items-center justify-between gap-3">
                      <div
                        class="flex items-center justify-between gap-2 font-bold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-info-circle"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                          />
                          <path
                            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                          />
                        </svg>
                        <p>5.53%</p>
                      </div>
                      <p class="text-gray-700">Projected net yield</p>
                    </div>
                  </div>
                </div>
                <div class="py-5 mt-5">
                  <div class="flex items-start gap-3 text-right mb-6">
                    <div>
                      <p class="font-bold">The Greens and Views, Dubai</p>
                      <p class="text-sm mt-1">
                        A green community at the centre of the city, with a
                        range of lifestyle amenities
                      </p>
                    </div>
                    <img
                      alt="img"
                      src="../assets/img/images.png"
                      class="w-11 h-11 rounded-full flex-shrink-0"
                    />
                  </div>
                  <div class="flex items-start gap-3 text-right">
                    <div>
                      <p class="font-bold">The Greens and Views, Dubai</p>
                      <p class="text-sm mt-1">
                        A green community at the centre of the city, with a
                        range of lifestyle amenities
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="36"
                      fill="currentColor"
                      class="bi bi-graph-up-arrow"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-8">
              <div>
                <h1
                  class="text-3xl font-bold after:absolute after:h-1 after:w-24 after:bg-primary after:left-0 after:-bottom-4 relative"
                >
                  Property Description
                </h1>
                <p class="mt-12 mb-4 opacity-70">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Donec velit neque, auctor sit
                  amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies
                  ligula sed magna dictum porta. Curabitur aliquet quam id dui
                  posuere blandit. Mauris blandit aliquet elit, eget tincidunt
                  nibh pulvinar quam id dui posuere blandit.
                </p>
                <p class="opacity-70">
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Donec rutrum congue leo eget malesuada. Quisque velit
                  nisi, pretium ut lacinia in, elementum id enim. Donec
                  sollicitudin molestie malesuada.
                </p>
              </div>
              <div class="mt-8">
                <h1
                  class="text-3xl font-bold after:absolute after:h-1 after:w-24 after:bg-primary after:left-0 after:-bottom-4 relative"
                >
                  Amenities
                </h1>
                <div class="mt-12 grid grid-cols-3 gap-4">
                  <div class="flex items-center gap-3 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-shop"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"
                      />
                    </svg>
                    <p class="opacity-60">Balcony</p>
                  </div>
                  <div class="flex items-center gap-3 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-door-open"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"
                      />
                      <path
                        d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"
                      />
                    </svg>
                    <p class="opacity-60">Outdoor Kitchen</p>
                  </div>
                  <div class="flex items-center gap-3 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-modem"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.5 1.5A1.5 1.5 0 0 1 7 0h2a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.404 1.497c.35.305.872.678 1.628 1.056A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.224-.947c.756-.378 1.277-.75 1.628-1.056A1.5 1.5 0 0 1 5.5 12.5zM7 1a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 9 1z"
                      />
                      <path
                        d="M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
                      />
                    </svg>
                    <p class="opacity-60">Cable Tv</p>
                  </div>
                  <div class="flex items-center gap-3 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-hdd-rack"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
                      />
                      <path
                        d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-3-4v2H4V7z"
                      />
                    </svg>
                    <p class="opacity-60">Deck</p>
                  </div>
                  <div class="flex items-center gap-3 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-brilliance"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7"
                      />
                    </svg>
                    <p class="opacity-60">Tennis Courts</p>
                  </div>
                  <div class="flex items-center gap-3 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-globe2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"
                      />
                    </svg>
                    <p class="opacity-60">Internet</p>
                  </div>
                  <div class="flex items-center gap-3 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-p-square"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z"
                      />
                      <path
                        d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"
                      />
                    </svg>
                    <p class="opacity-60">Parking</p>
                  </div>
                  <div class="flex items-center gap-3 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-brightness-alt-high"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4m0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8"
                      />
                    </svg>
                    <p class="opacity-60">Sun Room</p>
                  </div>
                  <div class="flex items-center gap-3 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-mic-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                      <path
                        d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"
                      />
                    </svg>
                    <p class="opacity-60">Concrete Flooring</p>
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <h1
                  class="text-3xl font-bold after:absolute after:h-1 after:w-24 after:bg-primary after:left-0 after:-bottom-4 relative"
                >
                  investment calculator
                </h1>
                <div class="flex items-center gap-2 mt-8 text-lg">
                  <p class="opacity-80 flex items-center gap-2">
                    Projected investment return of
                    <span class="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-question-circle cursor-pointer"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                        />
                        <path
                          d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"
                        />
                      </svg>
                      <p class="font-bold opacity-100">AED 78,825 in 5 years</p>
                    </span>
                  </p>
                </div>
                <div>
                  <div class="mt-12">
                    <apexchart
                      type="bar"
                      height="395"
                      class="w-100"
                      :options="chartOptions"
                      :series="series"
                    ></apexchart>
                  </div>
                </div>
              </div>
              <div class="mt-8 font-bold border-b pb-6">
                <div>
                  <div class="flex items-center justify-between gap-3">
                    <p class="font-bold text-lg">AED 50,000</p>
                    <p class="opacity-60">Initial Investment</p>
                  </div>
                  <input type="range" />
                </div>
                <div>
                  <div class="flex items-center justify-between gap-3">
                    <p class="font-bold text-lg">30%</p>
                    <p class="opacity-60">Property value growth (5 year)</p>
                  </div>
                  <input type="range" />
                </div>
                <div>
                  <div class="flex items-center justify-between gap-3">
                    <p class="font-bold text-lg">5.53%</p>
                    <p class="opacity-60">Expected annual rental yield</p>
                  </div>
                  <input type="range" />
                </div>
                <div
                  class="flex items-center mt-5 justify-center opacity-70 gap-2 font-bold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-info-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                    ></path>
                    <path
                      d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                    ></path>
                  </svg>
                  <p>Default values are based on property numbers</p>
                </div>
              </div>
              <div class="mt-8">
                <h1
                  class="text-3xl font-bold after:absolute after:h-1 after:w-24 after:bg-primary after:left-0 after:-bottom-4 relative"
                >
                  Financials
                </h1>
                <div class="mt-12">
                  <div
                    class="shadow rounded-3xl p-2 flex items-center gap-1 text-center font-bold"
                  >
                    <button class="flex-grow tab rounded-3xl py-2 active">
                      Annual Income
                    </button>
                    <button class="flex-grow tab rounded-3xl py-2">
                      Asquisition
                    </button>
                  </div>
                  <div class="border-b pb-5">
                    <div>
                      <div class="py-5 border-b">
                        <div
                          class="flex items-center justify-between gap-3 mb-5"
                        >
                          <div
                            class="flex items-center justify-between gap-2 font-bold"
                          >
                            <p>AED 118,750</p>
                          </div>
                          <p class="text-gray-700">Gross rent</p>
                        </div>
                        <div
                          class="flex items-center justify-between gap-3 mb-5"
                        >
                          <div
                            class="flex items-center justify-between gap-2 font-bold"
                          >
                          <p>(AED 7,370)</p>
                          </div>
                          <p class="text-gray-700">Service charges</p>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                          <div
                            class="flex items-center justify-between gap-2 font-bold"
                          >
                          <p>(AED 16,431)</p>
                          </div>
                          <p class="text-gray-700">Mgmt. and maintenance</p>
                        </div>
                      </div>
                      <div class="flex items-center justify-between gap-3 py-4">
                          <div
                            class="flex items-center justify-between gap-2 font-bold"
                          >
                          <p class="text-primary">AED 94.949</p>
                          </div>
                          <p class="text-gray-700">Net Income</p>
                      </div>
                      <div class="flex items-center mt-5 bg-gray-100  p-2 rounded-lg justify-center opacity-70 gap-2 font-bold"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path></svg><p>This is an estimate for the 1st year of ownership</p></div>
                    </div>
                    <div class="hidden">
                      <div class="py-5 border-b">
                        <div
                          class="flex items-center justify-between gap-3 mb-5"
                        >
                          <div
                            class="flex items-center justify-between gap-2 font-bold"
                          >
                            <p>AED 1,718,000</p>
                          </div>
                          <p class="text-gray-700">Property price</p>
                        </div>
                        <div
                          class="flex items-center justify-between gap-3 mb-5"
                        >
                          <div
                            class="flex items-center justify-between gap-2 font-bold"
                          >
                          <p>AED 255,695</p>
                          </div>
                          <p class="text-gray-700">Transaction costs</p>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                          <div
                            class="flex items-center justify-between gap-2 font-bold"
                          >
                          <p>1.5%</p>
                          </div>
                          <p class="text-gray-700">Stake fee</p>
                        </div>
                      </div>
                      <div class="flex items-center justify-between gap-3 py-4">
                          <div
                            class="flex items-center justify-between gap-2 font-bold"
                          >
                          <p class="text-primary">AED 1.943.695</p>
                          </div>
                          <p class="text-gray-700">Investment cost</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <h1
                  class="text-3xl font-bold after:absolute after:h-1 after:w-24 after:bg-primary after:left-0 after:-bottom-4 relative"
                >
                  Funding timeline
                </h1>
                <div class="mt-12">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
  
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

export default {
  name: "Home-component",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
  data: function () {
    return {
      series: [
        {
          name: "Value growth",
          data: [30000, 40000, 50000, 60000, 70000],
        },
        {
          name: "Total rent",
          data: [40000, 50000, 30000, 60000, 70000],
        },
        {
          name: "Investment",
          data: [30000, 40000, 50000, 60000, 70000],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          stacked: true,
        },
        plotOptions: {
          bar: {
            dataLabels: {
              total: {
                enabled: true,
                offsetX: 0,
                style: {
                  fontSize: "13px",
                  fontWeight: 900,
                },
              },
            },
          },
        },
        stroke: {
          width: 0,
          colors: ["#fff"],
        },
        title: {
          // text: 'projected investment'
        },
        xaxis: {
          categories: [2025, 2026, 2027, 2028, 2029],
          labels: {
            formatter: function (val) {
              return val + "";
            },
          },
        },
        yaxis: {
          title: {
            text: undefined,
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K";
            },
          },
        },
        fill: {
          opacity: 1,
        },
        colors: ["#299765", "#ffef00", "#000"],
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: 40,
        },
      },
    };
  },
};
</script>
  
<style>
.swiper-button-next,
.swiper-button-prev {
  width: 50px;
  height: 50px;
  background-color: rgb(41, 151, 101);
  border-radius: 100%;
  transition: all 0.4s;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: #191f2d;
}
.swiper-button-next:active,
.swiper-button-prev:active {
  transform: scale(0.9);
}
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 12px;
}
input[type="range"] {
  height: 46px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #299765;
  background: #299765;
  border-radius: 0px;
  border: 1px solid #299765;
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #ffffff;
  border: 10px solid #299765;
  height: 12px;
  width: 12px;
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -20px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #299765;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #299765;
  background: #299765;
  border-radius: 0px;
  border: 1px solid #299765;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #ffffff;
  border: 10px solid #299765;
  height: 12px;
  width: 12px;
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: #299765;
  border: 1px solid #299765;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #299765;
}
input[type="range"]::-ms-fill-upper {
  background: #299765;
  border: 1px solid #299765;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #299765;
}
input[type="range"]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #ffffff;
  border: 10px solid #299765;
  height: 12px;
  width: 12px;
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
}
input[type="range"]:focus::-ms-fill-lower {
  background: #299765;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #299765;
}
.tab.active {
  background-color: #299765;
  color: white;
}
</style>