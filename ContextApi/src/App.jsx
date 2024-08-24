import React from 'react';
import './App.css';


function App() { 
  return (
<>
<div class="flex min-h-screen w-full flex-col bg-muted/40">
      <aside
        class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex bg-slate-500"
      >
        <nav class="flex flex-col items-center gap-4 px-2 sm:py-5">
          <a
            class="bg-slate-400 group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4 transition-all group-hover:scale-110"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span class="sr-only">Profile</span>
          </a>
        </nav>
      </aside>
      <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <div class="flex flex-col gap-8 py-8 px-4 sm:px-6 md:px-8 lg:px-10">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="card col-span-1 md:col-span-2 lg:col-span-1">
              <div class="flex flex-col space-y-1.5 p-6">
                <div class="flex items-center gap-4">
                  <span
                    class="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 bg-muted"
                  >
                    <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="userimg" />
                  </span>
                  <div class="grid gap-1">
                    <h3 class="text-xl font-bold">John Doe</h3>
                    <p class="text-sm text-muted-foreground">
                      john@example.com
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <div class="grid gap-4">
                  <div class="grid gap-1">
                    <p class="text-lg font-medium">About</p>
                    <p class="text-md text-muted-foreground">
                      I'm a software engineer with a passion for building
                      innovative products. In my free time, I enjoy hiking and
                      reading.
                    </p>
                  </div>
                  <div class="grid gap-1">
                    <p class="text-lg font-medium">Location</p>
                    <p class="text-md text-muted-foreground">
                      San Francisco, CA
                    </p>
                  </div>
                  <div class="grid gap-1">
                    <p class="text-lg font-medium">Joined</p>
                    <p class="text-md text-muted-foreground">June 2021</p>
                  </div>
                </div>
              </div>
              <div className='flex justify-cente  '>
                <span className='font-semibold hover:bg-green-600  bg-green-500 text-white text-lg flex justify-center w-full mx-10 rounded-md cursor-pointer'>
                  Verify Now
                </span>
              </div>
              <div class="items-center p-6 flex sm:justify-end justify-center ">
                <button class="btn-primary rounded-md border px-2">Edit Profile</button>
              </div>
            </div>
            <div class="card col-span-1 md:col-span-2 lg:col-span-2">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3
                  class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight"
                >
                  Test History
                </h3>
                <p class="text-sm text-muted-foreground">
                  View your past test results.
                </p>
              </div>
              <div class="p-6">
                <div class="relative w-full overflow-auto">
                  <table class="w-full caption-bottom text-sm">
                    <thead class="[&amp;_tr]:border-b">
                      <tr
                        class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <th
                          class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                        >
                          Test Name
                        </th>
                        <th
                          class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                        >
                          Date
                        </th>
                        <th
                          class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                        >
                          Score
                        </th>
                      </tr>
                    </thead>
                    <tbody class="[&amp;_tr:last-child]:border-0">
                      <tr
                        class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <td
                          class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                        >
                          Aptitude Test
                        </td>
                        <td
                          class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                        >
                          June 15, 2023
                        </td>
                        <td
                          class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                        >
                          85%
                        </td>
                      </tr>
                      <tr
                        class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <td
                          class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                        >
                          Personality Assessment
                        </td>
                        <td
                          class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                        >
                          April 20, 2023
                        </td>
                        <td
                          class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                        >
                          92%
                        </td>
                      </tr>
                      <tr
                        class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <td
                          class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                        >
                          Technical Interview
                        </td>
                        <td
                          class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                        >
                          March 10, 2023
                        </td>
                        <td
                          class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                        >
                          78%
                        </td>
                      </tr>
                      <tr
                        class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <td
                          class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                        >
                          Coding Challenge
                        </td>
                        <td
                          class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                        >
                          January 5, 2023
                        </td>
                        <td
                          class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                        >
                          90%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              class="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col gap-4"
            ></div>
          </div>
        </div>
      </div>
    </div>
</>
  );
}
export default App;
