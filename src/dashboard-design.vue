<template>
  <div class="flex mb-20">
    <!-- sidebar nav start -->
    <div class="bg-white w-[250px] border border-gray-200 relative p-4 sticky top-0">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-2xl text-left font-extrabold">
            Demo<span class="text-red-500">Logo</span>
          </h2>
        </div>
        <button class="text-black/70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 aspect-sqare"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
            ></path>
          </svg>
        </button>
      </div>

      <div>
        <a
          href="#"
          class="text-base flex items-center gap-2 px-2 py-2 border-b border-black/10"
        >
          <i class="text-red-500 font-medium text-lg ph ph-squares-four"></i>
          Dashboard
        </a>
        <a
          href="#"
          class="text-base flex items-center gap-2 px-2 py-2 border-b border-black/10"
        >
          <i class="text-red-500 font-medium text-lg ph ph-chat-circle"></i>
          Chat
        </a>
        <a
          href="#"
          class="text-base flex items-center gap-2 px-2 py-2 border-b border-black/10"
        >
          <i class="text-red-500 font-medium text-lg ph ph-user"></i>
          Profile
        </a>
        <a
          href="#"
          class="text-base flex items-center gap-2 px-2 py-2 border-b border-black/10"
        >
          <i class="text-red-500 font-medium text-lg ph ph-first-aid-kit"></i>
          Doctor
        </a>
        <a
          href="#"
          class="text-base flex items-center gap-2 px-2 py-2 border-b border-black/10"
        >
          <i class="text-red-500 font-medium text-lg ph ph-prescription"></i>
          Prescription
        </a>
        <a
          href="#"
          class="text-base flex items-center gap-2 px-2 py-2 border-b border-black/10"
        >
          <i class="text-red-500 font-medium text-lg ph ph-notepad"></i>
          Book Appointment
        </a>
        <a
          href="#"
          class="text-base flex items-center gap-2 px-2 py-2 border-b border-black/10"
        >
          <i class="text-red-500 font-medium text-lg ph ph-gear"></i>
          Settings
        </a>
        <a
          href="#"
          class="text-base flex items-center gap-2 px-2 py-2 border-b border-black/10"
        >
          <i class="text-red-500 font-medium text-lg ph ph-sign-out"></i>
          LogOut
        </a>
      </div>
    </div>
    <!-- sidebar nav end -->

    <div>
      <!-- navigation start -->
      <div class="py-2 px-4 mb-6 border-b border-gray-200">
        <div class="container mx-auto flex items-center justify-between">
          <div class="flex items-center gap-6">
            <div>
              <butto class="text-black/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 aspect-sqare"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
                  ></path>
                </svg>
              </butto>
            </div>

            <div class="relative">
              <input
                type="search"
                placeholder="Search..."
                class="py-1 px-4 w-[250px] rounded outline-none border border-black/20"
              />
              <button type="submit" class="absolute pointer-events-none right-4 top-1">
                <i class="text-black/20 font-semibold ph ph-magnifying-glass"></i>
              </button>
            </div>
          </div>

          <!-- logo start -->
          <div class="pb-1">
            <h2 class="text-3xl font-extrabold">
              Demo<span class="text-red-500">Logo</span>
            </h2>
          </div>
          <!-- logo end -->

          <div class="flex gap-x-4 items-center">
            <h3 class="text-sm font-medium capitalize">Mahsin Ullah Azmi</h3>
            <img
              src="@/img/profile.jpg"
              alt="profile"
              class="w-10 aspect-square object-cover rounded-full border-4"
            />
          </div>
        </div>
      </div>
      <!-- navigation end -->

      <div class="flex-1 px-6">
        <div class="container mx-auto">
          <!-- addvedice img complex start -->
          <div class="grid grid-cols-2 gap-6 mb-6">
            <div>
              <img src="@/img/add-1.webp" alt="" class="w-full object-cover h-[120px]" />
            </div>
            <div>
              <img src="@/img/add-2.webp" alt="" class="w-full object-cover h-[120px]" />
            </div>
          </div>
          <!-- addvedice img complex end -->

          <div class="flex gap-6 mb-6">
            <!-- card-design start -->
            <div class="flex-1">
              <div class="grid grid-cols-3 gap-6">
                <div
                  class="text-center py-4 px-6 h-full border border-gray-300 rounded-md"
                >
                  <img
                    src="https://doccure.dreamguystech.com/laravel/template/public/assets/img/services/features-01.svg"
                    alt=""
                    class="mx-auto w-8 mb-2 aspect-square"
                  />
                  <h3 class="font-semibold mb-2">Operation</h3>
                  <p class="text-black/80 leading-5 text-sm">
                    It is a long established fact that a reader
                  </p>
                </div>

                <div
                  class="text-center py-4 px-6 h-full border border-gray-300 rounded-md"
                >
                  <img
                    src="https://doccure.dreamguystech.com/laravel/template/public/assets/img/services/features-02.svg"
                    alt=""
                    class="mx-auto w-8 mb-2 aspect-square"
                  />
                  <h3 class="font-semibold">Medical</h3>
                  <p class="text-black/80 leading-5 text-sm">
                    It is a long established fact that a reader
                  </p>
                </div>

                <div
                  class="text-center py-4 px-6 h-full border border-gray-300 rounded-md"
                >
                  <img
                    src="https://doccure.dreamguystech.com/laravel/template/public/assets/img/services/features-04.svg"
                    alt=""
                    class="mx-auto w-8 mb-2 aspect-square"
                  />
                  <h3 class="font-semibold">Test Room</h3>
                  <p class="text-black/80 leading-5 text-sm">
                    It is a long established fact that a reader
                  </p>
                </div>
                <div
                  class="text-center py-4 px-6 h-full border border-gray-300 rounded-md"
                >
                  <img
                    src="https://doccure.dreamguystech.com/laravel/template/public/assets/img/services/features-03.svg"
                    alt=""
                    class="mx-auto w-8 mb-2 aspect-square"
                  />
                  <h3 class="font-semibold">Patient Ward</h3>
                  <p class="text-black/80 leading-5 text-sm">
                    It is a long established fact that a reader
                  </p>
                </div>
                <div
                  class="text-center py-4 px-6 h-full border border-gray-300 rounded-md"
                >
                  <img
                    src="https://doccure.dreamguystech.com/laravel/template/public/assets/img/services/features-05.svg"
                    alt=""
                    class="mx-auto w-8 mb-2 aspect-square"
                  />
                  <h3 class="font-semibold">ICU</h3>
                  <p class="text-black/80 leading-5 text-sm">
                    It is a long established fact that a reader
                  </p>
                </div>
                <div
                  class="text-center py-4 px-6 h-full border border-gray-300 rounded-md"
                >
                  <img
                    src="https://doccure.dreamguystech.com/laravel/template/public/assets/img/services/features-06.svg"
                    alt=""
                    class="mx-auto w-8 mb-2 aspect-square"
                  />
                  <h3 class="font-semibold">Laboratory</h3>
                  <p class="text-black/80 leading-5 text-sm">
                    It is a long established fact that a reader
                  </p>
                </div>
              </div>
            </div>
            <!-- card design end -->

            <!-- addvedice img complex start -->
            <div class="bg-red-200 flex-2">
              <img src="@/img/add-3.webp" alt="" class="w-[140px] object-cover h-full" />
            </div>
            <!-- addvedice img complex end -->
          </div>
          <!-- addvedice img complex start -->
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-green-200">
              <img src="@/img/add-4.webp" alt="" class="w-full object-cover h-[120px]" />
            </div>
            <div class="bg-green-200">
              <img src="@/img/add-1.webp" alt="" class="w-full object-cover h-[120px]" />
            </div>
          </div>
          <!-- addvedice img complex end -->
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="container mx-auto">
      <form class="mb-10">
        <div class="grid grid-cols-2 gap-4">
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input
              type="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
            />
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900"
              >Your password</label
            >
            <input
              type="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="password"
            />
          </div>
        </div>

        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Your Name"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900"
              >Choose File</label
            >
            <input
              type="file"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              placeholder="Choose File"
            />
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900"
              >Your password</label
            >
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
        </div>

        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
          <textarea
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        <div class="mb-8">
          <label class="block mb-2 text-sm font-medium text-gray-900"
            >Select your country</label
          >
          <select
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>

        <div class="mb-10">
          <div class="flex items-center mb-4">
            <input
              checked
              id="checkbox-1"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label for="checkbox-1" class="ml-2 text-sm font-medium text-gray-900"
              >I agree to the
              <a href="#" class="text-blue-600 hover:underline"
                >terms and conditions</a
              >.
            </label>
          </div>

          <div class="flex items-center mb-4">
            <input
              id="checkbox-2"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label for="checkbox-2" class="ml-2 text-sm font-medium text-gray-900"
              >I want to get promotional offers</label
            >
          </div>

          <div class="flex items-center">
            <input
              type="checkbox"
              value=""
              class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              disabled
            />
            <label class="ml-2 text-sm font-medium text-gray-400"
              >Eligible for international shipping (disabled)</label
            >
          </div>
        </div>

        <div class="mb-10">
          <div class="flex items-center mb-4">
            <input
              checked
              id="checkbox-1"
              type="radio"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label for="checkbox-1" class="ml-2 text-sm font-medium text-gray-900"
              >I agree to the
              <a href="#" class="text-blue-600 hover:underline"
                >terms and conditions</a
              >.
            </label>
          </div>

          <div class="flex items-center mb-4">
            <input
              id="checkbox-2"
              type="radio"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label for="checkbox-2" class="ml-2 text-sm font-medium text-gray-900"
              >I want to get promotional offers</label
            >
          </div>

          <div class="flex items-center">
            <input
              type="radio"
              value=""
              class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
              disabled
            />
            <label class="ml-2 text-sm font-medium text-gray-400"
              >Eligible for international shipping (disabled)</label
            >
          </div>
        </div>

        <div class="mb-10 flex gap-4 flex-wrap items-center">
          <div class="flex items-center">
            <input
              checked
              id="checkbox-1"
              type="radio"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label for="checkbox-1" class="ml-2 text-sm font-medium text-gray-900"
              >I agree to the
              <a href="#" class="text-blue-600 hover:underline"
                >terms and conditions</a
              >.
            </label>
          </div>

          <div class="flex items-center">
            <input
              id="checkbox-2"
              type="radio"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label for="checkbox-2" class="ml-2 text-sm font-medium text-gray-900"
              >I want to get promotional offers</label
            >
          </div>

          <div class="flex items-center">
            <input
              type="radio"
              value=""
              class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              disabled
            />
            <label class="ml-2 text-sm font-medium text-gray-400"
              >Eligible for international shipping (disabled)</label
            >
          </div>
        </div>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Default</button>
      </form>

      <div class="relative overflow-x-auto border">
        <table class="w-full text-sm text-left text-gray-500">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50"
          >
            <tr class="border-b">
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Color</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
              <th scope="col" class="px-6 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>