<template>
  <div class="flex bg-gray-100 min-h-screen" x-data="{panel:false, menu:true}">
    <aside class="flex flex-col d-none d-sm-block">
      <a href="#"
        class="inline-flex items-center justify-center h-20 w-full no-underline bg-blue-600 hover:bg-blue-500 focus:bg-blue-500">
        <span class="text-white text-4xl ml-2" x-show="menu">Gas Online</span>
      </a>
      <div class="flex-grow flex flex-col justify-between text-gray-500">
        <nav class="flex flex-col mx-4 my-6 space-y-4">
          <a href="#" class="inline-flex items-center py-3 text-blue-600 bg-white no-underline rounded-lg px-2"
            :class="{ 'justify-start': menu, 'justify-center': menu == false }">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span class="ml-2" x-show="menu">Dashboard</span>
          </a>
          <router-link to="/users"
            class="inline-flex items-center py-3 hover:text-gray-400 no-underline hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2"
            :class="{ 'justify-start': menu, 'justify-center': menu == false }">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="ml-2" x-show="menu">Users</span>
          </router-link>
          <router-link to="/reservations"
            class="inline-flex items-center py-3 no-underline hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2"
            :class="{ 'justify-start': menu, 'justify-center': menu == false }">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span class="ml-2" x-show="menu">Reservations</span>
          </router-link>
        </nav>
      </div>
    </aside>
    <div class="flex-grow text-gray-800">
      <header class="flex items-center h-20 px-6 sm:px-10 bg-white">
        <div class="flex flex-shrink-0 items-center ml-auto">
          <button class="relative inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
            <span class="sr-only">User Menu</span>
            <div class="hidden md:flex md:flex-col md:items-end md:leading-tight">
              <span class="font-semibold"></span>
              <span class="text-sm text-gray-600">Admin</span>
            </div>
            <span class="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
              <img src="../assets/images/user.png" alt="user profile photo" class="h-full w-full object-cover">
            </span>
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor"
              class="hidden sm:block h-6 w-6 text-gray-300">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
          <div class="absolute top-20 bg-white border rounded-md p-2 w-56" x-show="panel" style="display:none">
            <div class="p-2 hover:bg-blue-100 cursor-pointer">Profile</div>
            <div class="p-2 hover:bg-blue-100 cursor-pointer">Messages</div>
            <div class="p-2 hover:bg-blue-100 cursor-pointer">To-Do's</div>
          </div>
          <div class="border-l pl-3 ml-3 space-x-1">
            <button
              class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span class="sr-only">Notifications</span>
              <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
              <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button @click="logout()"
              class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span class="sr-only">Log out</span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main class="p-6 sm:p-10 space-y-6">
        <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div class="mr-6">
            <h1 class="text-4xl font-semibold mb-2">DASHBOARD</h1>
            <h2 class="text-gray-600 ml-0.5">Reservation Dashboard</h2>
          </div>
          <div class="flex flex-wrap items-start justify-end -mb-3">
            <div class="row">
              <div class="col-6">
                <button
                  class="inline-flex px-5 py-3 text-blue-600 hover:text-blue-700 focus:text-blue-700 hover:bg-blue-100 focus:bg-blue-100 border border-blue-600 rounded-md mb-3">
                  <router-link to="/dashboard" class="no-underline">Dashboard</router-link>
                </button>
              </div>
              <div class="col-6">
                <button
                  class="inline-flex px-5 py-3 text-blue-600 hover:text-blue-700 focus:text-blue-700 hover:bg-blue-100 focus:bg-blue-100 border border-blue-600 rounded-md mb-3">
                  <router-link to="/users" class="no-underline">Users</router-link>
                </button>
              </div>
            </div>
            <button
              class="inline-flex px-5 py-3 text-white bg-blue-600 hover:bg-purple-700 focus:bg-blue-700 rounded-md ml-6 mb-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create new Order
            </button>
          </div>
        </div>
        <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div
              class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <span class="block text-2xl font-bold">1162</span>
              <span class="block text-gray-500">Customers</span>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div
              class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <span class="block text-2xl font-bold">6.8</span>
              <span class="block text-gray-500">Average Return Clients</span>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div
              class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
            <div>
              <span class="inline-block text-2xl font-bold">9</span>
              <span class="inline-block text-xl text-gray-500 font-semibold">(14%)</span>
              <span class="block text-gray-500">Underperforming Clients Average</span>
            </div>
          </div>
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div
              class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <span class="block text-2xl font-bold">83%</span>
              <span class="block text-gray-500">Total Finish Surply</span>
            </div>
          </div>
        </section>
        <section>
          <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white w-5/6">
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full table-auto">
                        <thead class="bg-white border-b">
                          <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              FUll Name
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Phone
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              ID Card
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Location
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Email
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Quantity
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                            v-for="booking in bookings" :key="booking">
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {{ booking.fullName }}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {{ booking.phone }}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {{ booking.idCard }}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {{ booking.location }}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {{ booking.email }}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {{ booking.quantity }}
                            </td>
                            <td>
                              <button
                                class="bg-red-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                                @click="deleteSchedule(listspace)">
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>



<script>
import { fb, db } from "../firebase";
import "vuejs-noty/dist/vuejs-noty.css";

export default {
  data() {
    return {
      booking: [],
    };
  },
  firestore() {
    return {
      // Collection
      bookings: db.collection("bookings"),
    };
  },

  methods: {
    deleteBooking(booking) {
      db.collection("bookings")
        .doc(booking.id)
        .delete()
        .then((response) => {
          this.$noty.success("Successfully Deleted ", response);
        })
        .catch((error) => {
          console.error("Error removing document: ", error); // eslint-disable-line no-console
        });
    },

    deleteBooking(booking) {
      db.collection("bookings")
        .doc(booking.id)
        .delete()
        .then((response) => {
          this.$noty.success("Successfully Deleted ", response);
        })
        .catch((error) => {
          console.error("Error removing document: ", error); // eslint-disable-line no-console
        });
    },

    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
      // .catch(err => {
      //   console.log(err);
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
</style> 
