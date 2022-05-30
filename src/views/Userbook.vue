<template>
  <div class="bg-auto bg-blue-500 bg-center h-screen">
      <br><br>
    <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
      <div class="flex-1">
        <div class="text-center">
          <h2 class="mt-3 text-gray-500 dark:text-gray-300">Reserve Your Gas</h2>
        </div>
        <div class="mt-8">
          <form @submit="sendBooking">
            <div>
              <div class="row">
                <div class="col-6">
                  <div>
                    <label for="name" class="block mb-2 text-xl text-bold text-white dark:text-gray-200">
                      Full Name</label>
                    <input v-model="booking.fullName" type="text" name="name" id="name" placeholder="Full Name"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                </div>
                <div class="col-6">
                  <div>
                    <label for="name" class="block mb-2 text-xl text-bold text-white dark:text-gray-200">
                      Email</label>
                    <input v-model="booking.email" type="text" name="name" id="name" placeholder="Email"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="row">
                <div class="col-6">
                  <div class="mt-6">
                    <div class="flex justify-between mb-2">
                      <label for="city" class="text-sm text-xl text-bold text-white dark:text-gray-200">Location</label>
                    </div>
                    <input v-model="booking.location" type="text" name="location" id="Location"
                      placeholder="Your Location"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="mt-6">
                    <div class="flex justify-between mb-2">
                      <label for="text" class="text-sm text-xl text-bold text-white dark:text-gray-200">ID Card
                        Size</label>
                    </div>
                    <input v-model="booking.idCard" type="text" name="idCard" id="idCard"
                      placeholder="Ex: Ghana Card"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="row">
                <div class="col-6">
                  <div class="mt-6">
                    <div class="flex justify-between mb-2">
                      <label for="password"
                        class="text-sm text-xl text-bold text-white dark:text-gray-200">Phone</label>
                    </div>
                    <input v-model="booking.phone" type="text" name="conatct" id="contact"
                      pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" placeholder="0244-000-000"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="mt-6">
                    <div class="flex justify-between mb-2">
                      <label for="text"
                        class="text-sm text-xl text-bold text-white  dark:text-gray-200">Quantity</label>
                    </div>
                    <input v-model="booking.quantity" type="text" name="quantity" id="quantity"
                      placeholder="ex: 20kg"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="mt-6">
                  <button type="submit"
                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Submit
                  </button>
                </div>
              </div>
              <div class="col-6">
                <div class="mt-6">
                  <router-link type="submit" to="/profile"
                    class="w-full px-4 py-2 tracking-wide text-center no-underline text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Cancel
                  </router-link>
                </div>
              </div>
            </div>
          </form>
          <!-- <p class="mt-6 text-sm text-center text-gray-900">Our Rep will Contact you within 10min to Confirm Your
            Listing</p> -->
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
      this.$router.replace("/profile");
    },
  },
};
</script>
