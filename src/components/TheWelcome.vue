<script>
export default {
  data() {
    return {
      usernameOrEmail: '',
      password: '',
      usernameOrEmailError: '',
      passwordError: '',
      formValid: false,
      submitting: false,
      loginSuccess: false
    };
  },
  methods: {
    //form validation username/email field
    validateUsernameOrEmail() {
      if (!this.usernameOrEmail || this.usernameOrEmail.length < 6 || this.usernameOrEmail.length > 50) {
        this.usernameOrEmailError = 'Username or email must be between 6 and 50 characters.';
      } else {
        this.usernameOrEmailError = '';
      }
      this.validateForm();
    },
    //form validation password field
    validatePassword() {
      //regex and error handling 
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;
      if (!this.password || !passwordRegex.test(this.password)) {
        this.passwordError = 'Password must be at least 10 characters and contain at least one alphabet, one symbol, and one number.';
      } else {
        this.passwordError = '';
      }
      this.validateForm();
    },
    validateForm() {
      this.formValid = !this.usernameOrEmailError && !this.passwordError;
    },
    //debouncing loading 5 seconds
    submitForm() {
      if (this.formValid) {
        this.submitting = true;
        setTimeout(() => {
          // Simulate form submission success
          this.submitting = false;
          this.loginSuccess = true;
          console.log("Username:", this.usernameOrEmail); // only to confirm the data
          console.log("Password:", this.password); // only to confirm the data
          console.log("Login successful!"); // only to confirm sucsess login
        }, 5000);
      }
    }
  }
};
</script>

<template>
  <main class="bg-[#212526] h-screen flex flex-col items-center justify-center">

    <div class="flex justify-center md:justify-end items-center">

      <!-- {/* start div middle page  */}       -->
      <div class="flex justify-center flex-col md:flex-row m-8">



        <!-- {/* Start Facebook Button */} -->
        <a href="#"
          class="hidden md:flex bg-[#3A5598] text-white text-center  flex-col items-center justify-center p-5 mr-3 flex-1 shadow-lg">
          <p class="text-6xl font-['Klavika']">f</p>
          <p class="mt-2 font-sans ">Connect with Facebook</p>
        </a>
        <!-- {/* End Facebook Button */} -->

        <!-- Start or between Facebook and Form -->
        <span
          class="hidden md:flex bg-[#212526] rounded-full p-4 border-solid border-[#212526] z-10 absolute mr-20 mt-3">
          <p class="text-white">or</p>
        </span>
        <!-- End or between Facebook and Form  -->



        <!-- {/* Star Login Form */} -->
        <div class="bg-[#565455] text-white flex-2 shadow-lg">
          <p class="m-4 font-sans font-bold">Log in with awesome new thing</p>
          <form class="flex flex-col" id="form" @submit.prevent="submitForm">

            <input type="text" v-model="usernameOrEmail" placeholder="Username or email"
              class="bg-[#333333] m-2 p-2 rounded" @input="validateUsernameOrEmail" />
            <div v-if="usernameOrEmailError" class="text-red-600 text-sm font-medium p-3 flex md:hidden">{{
            usernameOrEmailError }}
            </div>

            <input type="password" v-model="password" placeholder="password " class="bg-[#333333] m-2 p-2 rounded"
              @input="validatePassword" />
            <div v-if="passwordError" class="text-red-600 text-sm font-medium p-3 flex md:hidden">{{ passwordError }}
            </div>


            <span><a href="#" class="m-2 text-sm ">Forgot you password?</a></span>
            <button class=" md:hidden bg-[#FF5F33] rounded p-2 mt-4" type="submit" :disabled="!formValid || submitting">
              <font-awesome-icon v-if="submitting" :icon="['fas', 'spinner']" class="fa-xl text-white animate-spin" />
              <span v-else>Login</span>
            </button>
          </form>


        </div>
        <!-- {/* End Login Form */} -->



      </div>
      <!-- {/* End div middle page  */} -->

      <!-- {/* Star Submit button */} -->
      <button
        class="hidden md:flex bg-[#FF5F33] rounded-full p-4 border-solid border-8 border-[#212526] ml-4 z-10 absolute"
        v-on:click.prevent="submitForm">
        <font-awesome-icon v-if="submitting" :icon="['fas', 'spinner']" class="fa-xl text-white animate-spin" />
        <font-awesome-icon v-else="" :icon="['fas', 'arrow-right']" class="fa-xl text-white" />
      </button>
      <!-- {/* End Submit button */} -->

    </div>
    <div v-if="loginSuccess" class="text-green-600 text-center text-sm font-medium p-3 flex md:hidden">Login successful!
    </div>



    <!-- Start divider -->
    <div class="flex md:hidden relative py-5 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400">OR</span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>
    <!-- End divider -->

    <!-- Start facebook login button sm -->
    <button class="flex md:hidden bg-[#3A5598] rounded">
      <p class="text-white p-4"><b class="text-xl font-['Klavika'] mr-5">f</b> Login with facebook</p>
    </button>
    <!-- End facebook login button sm-->

    <div v-if="passwordError" class="text-red-600 text-sm font-medium p-3 hidden md:flex">{{ passwordError }}</div>
    <div v-if="usernameOrEmailError" class="text-red-600 text-sm font-medium p-3 hidden md:flex">{{ usernameOrEmailError
      }}</div>
    <div v-if="loginSuccess" class="text-green-600 text-sm font-medium p-3 hidden md:flex">Login successful!</div>
  </main>
</template>
