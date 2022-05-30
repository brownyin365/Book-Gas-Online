<template>
  <div class="bg-auto bg-no-repeat bg-center h-screen"
    style="background-image: url('https://image.made-in-china.com/2f0j00kHqGAlVRJfcY/Gas-Filling-Station-Construction-Petrol-Station-Equipment-Fuel-Dispenser.jpg')">
    <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
      <div class="flex-1">
        <div class="text-center">
          <h2 class="text-4xl font-bold text-center text-yellow-500 dark:text-white">Online Gas Booking System</h2>

          <!-- <h2 class="mt-3 text-gray-500 dark:text-gray-300">Reserve Your Gas</h2> -->
        </div>

        <div class="mt-8">
          <form class="w-full max-w-lg" @submit="sendBooking">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                  Full Name
                </label>
                <input v-model="booking.fullName"
                  class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name" type="text" placeholder="Full Name">
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                  ID Card
                </label>
                <input v-model="booking.idCard"
                  class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name" type="text" placeholder="Ex: Ghana Card">
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-email">
                  Email
                </label>
                <input v-model="booking.email"
                  class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email" type="email" placeholder="Email">
              </div>
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                  Location
                </label>
                <input v-model="booking.location"
                  class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password" type="text" placeholder="Location">
                <!-- <router-link to="/signup" class="text-center text-white no-underline mt-16">Become our Client by Signing up</router-link> -->
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                  City
                </label>
                <input v-model="booking.city"
                  class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city" type="text" placeholder="City">
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
                  Quantity
                </label>
                <input v-model="booking.quantity"
                  class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city" type="text" placeholder="Ex: 20kg">
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
                  Telephone
                </label>
                <input v-model="booking.phone"
                  class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip" type="text" placeholder="Telephone">
              </div>
            </div>
            <div class="mt-6">
              <button type="submit"
                class="group relative uppercase w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-yellow-800 bg-yellow-400 hover:bg-yellow-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                <span class="absolute left-0 inset-y pl-3">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                    </path>
                  </svg>
                </span>
                Place Your Order
              </button>
              <br>
                <p class="mt-2 text-center text-sm leading-5 text-yellow-800 max-w">
           Become our Client by,click
        <router-link to="/signup" class="font-medium text-white hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
         Signing up
        </router-link>
      </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
import "vuejs-noty/dist/vuejs-noty.css";

export default {
  data() {
    return {
      bookings: [],
      booking: {
        fullName: null,
        location: null,
        email: null,
        quantity: null,
        idCard: null,
        phone: null,
      },
    };
  },
  firestore() {
    return {
      // Collection
      bookings: db.collection("bookings"),
    };
  },
  methods: {
    sendBooking() {
      this.$firestore.bookings
        .add(this.booking)
        .then((response) => {
          this.$noty.success("Successfully Book Your Seat ", response);
        })
        .catch((error) => {
          console.error("Error writing document: ", error); // eslint-disable-line no-console
        });
      this.$router.replace("/Payment");
    },
  },
};
</script>



