<script setup>
import { ref } from "vue";

const signupForm = ref(null);

import Group1010 from "/assets/images/SignUpImg/Group 1010.png";
import Group878 from "/assets/images/SignUpImg/Group 878.png";
import OrangeStar from "/assets/images/SignUpImg/Group 895.png";
import Book from "/assets/images/SignUpImg/Group 1106.png";
import Star from "/assets/images/testimonials/star.svg";

import Cookies from "js-cookie";
const submitForm = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Get form data from the ref
    const formData = new FormData(signupForm.value);

    // Validate if passwords match
    if (
        signupForm.value.confirm_password.value !==
        signupForm.value.password.value
    ) {
        console.error("Passwords do not match");
        return; // Stop if passwords don't match
    }

    try {
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    first_name: signupForm.value.first_name.value,
                    last_name: signupForm.value.last_name.value,
                    // birthday: signupForm.value.birthday.value,
                    school_name: signupForm.value.school_name.value,
                    email: signupForm.value.email.value,
                    password: signupForm.value.password.value,
                    confirm_password: signupForm.value.confirm_password.value,
                },
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong");
        }

        console.log("Success:", data);
        //! Go To login
        console.log("Signup Successful", data);

        const loginResponse = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    email: signupForm.value.email.value,
                    password: signupForm.value.password.value,
                },
            }),
        });
        const loginData = await loginResponse.json();
        if (!loginResponse.ok) {
            throw new Error(loginData.error || "Something went wrong");
        }
        console.log("Login Successful", loginData);

        if (loginData.token) {
            Cookies.set("audemyUserSession", JSON.stringify(loginData.token), {
                expires: 7, // Set the cookie to expire in 7 days
                secure: true,
            });
            window.location.href = "/game-zone";
        } else {
            throw new Error("Token not found");
        }
        signupForm.value.reset();

        // Handle success (e.g., redirect, show success message)
    } catch (error) {
        console.error("Error:", error.message);
        // Handle error (e.g., show error message to the user)
    }
};
</script>
<template>
    <div
        class="w-full min-h-screen overflow-auto flex justify-between gap-[98px] font-poppins mobile:flex-col mobile:gap-[20px]"
    >
        <!-- SIDE IMAGE -->

        <div
            class="w-5/12 p-0 bg-[#E5F0F5] relative mobile:w-full mobile:h-[40%]"
        >
            <p
                class="font-bold text-[16px] text-[#151E22] mt-[45px] ml-20 mobile:ml-5"
            >
                audemy
            </p>

            <img
                :src="OrangeStar"
                class="w-[66px] absolute left-[359px] top-[110px] z-10 mobile:left-[80%] mobile:top-[20%]"
                alt=""
            />
            <img
                :src="Star"
                class="w-[69px] absolute left-[89px] top-[310px] z-10 mobile:left-[20%] mobile:top-[50%]"
                alt=""
            />
            <img
                :src="Book"
                class="w-[66px] absolute left-[580px] top-[430px] z-10 mobile:hidden"
                alt=""
            />
            <img
                :src="Group878"
                class="absolute bottom-[-350px] w-[full] mobile:bottom-[-200px] mobile:hidden"
                alt=""
            />
            <img
                :src="Group1010"
                class="absolute bottom-[60px] w-[60%] left-[50%] translate-x-[-50%] mobile:w-[80%] mobile:hidden"
                alt=""
            />
        </div>

        <div
            class="w-7/12 pt-[62px] pb-[162px] mobile:w-full mobile:pt-[20px] mobile:pb-[20px] mobile:px-20 flex flex-col place-items-center"
        >
            <h1
                class="text-[40px] text-[#151E22] max-w-[504px] mobile:text-[28px] mobile:max-w-full mobile:px-4"
            >
                Sign up to get started!
            </h1>

            <!-- Google OAuth Login -->
            <div class="flex w-full gap-4 items-center justify-center mt-4">
                <GoogleLogin
                    :callback="callback"
                    class="flex items-center justify-center gap-4"
                />
            </div>

            <div
                class="flex text-gray-500 w-full justify-center items-center gap-2 mt-4"
            >
                <div><hr class="w-52 h-0.5 my-4 bg-gray-500 rounded-sm" /></div>
                <div>or</div>
                <div><hr class="w-52 h-0.5 my-4 bg-gray-500 rounded-sm" /></div>
            </div>

            <!-- FORM FIELD -->
            <form
                ref="signupForm"
                class="mt-4 max-w-[488px] mobile:mt-[30px] mobile:px-4 mobile:w-full"
            >
                <!-- FIRST & LAST NAME -->
                <div
                    class="flex items-center justify-between mb-[16px] mobile:flex-col mobile:gap-4"
                >
                    <div class="w-[221px] mr-[36px] mobile:w-full mobile:mr-0">
                        <label
                            class="block text-[#0C0D0D] font-semiBold"
                            for="first_name"
                            >First Name</label
                        >
                        <input
                            type="text"
                            class="outline-none border border-black h-[48px] px-4 rounded-[8px] w-full"
                            id="first_name"
                            name="first_name"
                            placeholder="Enter your first name"
                        />
                    </div>

                    <div class="w-[221px] mobile:w-full">
                        <label
                            class="block text-[#0C0D0D] font-semiBold"
                            for="last_name"
                            >Last Name</label
                        >
                        <input
                            type="text"
                            class="outline-none border border-black h-[48px] px-4 rounded-[8px] w-full"
                            id="last_name"
                            name="last_name"
                            placeholder="Enter your last name"
                        />
                    </div>
                </div>

                <!-- DOB FIELD -->
                <div class="mb-[16px] mobile:w-full">
                    <label class="block text-[#0C0D0D] font-semiBold"
                        >Date of Birth</label
                    >
                    <input
                        type="date"
                        class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
                        id="birthday"
                        name="birthday"
                        placeholder="MM-DD-YYYY"
                    />
                </div>

                <!-- SCHOOL FIELD -->
                <div class="mb-[16px] mobile:w-full">
                    <label
                        for="school_name"
                        class="block text-[#0C0D0D] font-semiBold"
                        >School</label
                    >
                    <input
                        type="text"
                        class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
                        id="school_name"
                        name="school_name"
                        placeholder="Enter your school's name"
                    />
                </div>

                <!-- EMAIL FIELD -->
                <div class="mb-[16px] mobile:w-full">
                    <label
                        class="block text-[#0C0D0D] font-semiBold"
                        for="email"
                        >Email</label
                    >
                    <input
                        type="email"
                        class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                    />
                </div>

                <!-- PASSWORD FIELD -->
                <div class="mb-[16px] mobile:w-full">
                    <label
                        for="password"
                        class="block text-[#0C0D0D] font-semiBold"
                        >Password</label
                    >
                    <input
                        type="password"
                        class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
                        id="password"
                        name="password"
                        placeholder="Create your best password"
                    />
                </div>

                <!-- CONFIRM PASSWORD FIELD -->
                <div class="mb-[16px] mobile:w-full">
                    <label
                        for="confirm_password"
                        class="block text-[#0C0D0D] font-semiBold"
                        >Confirm Password</label
                    >
                    <input
                        type="password"
                        class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
                        id="confirm_password"
                        name="confirm_password"
                        placeholder="Confirm your password"
                    />
                </div>

                <p
                    class="font-semiBold text-[16px] text-[#0C0D0D] mobile:text-[14px] mobile:px-4"
                >
                    Already have an Audemy account?
                    <a href="login" class="text-[#087BB4] hover:text-[#0C587D]"
                        >Log in</a
                    >
                </p>

                <!-- GET STARTED BTN -->
                <div class="mt-[24px] mb-[30px] mobile:w-full mobile:px-4">
                    <button
                        type="button"
                        @click="submitForm"
                        class="w-[488px] h-[56px] text-white rounded-[8px] bg-[#087BB4] hover:bg-[#0C587D] hover:cursor-pointer border-2 border-black font-semiBold shadow-[4px_4px_0px_black] mobile:w-full"
                        value="Get Started"
                    >
                        Get Started
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
