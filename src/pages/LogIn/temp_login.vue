<script setup>
import { ref, onMounted } from "vue";
import { GoogleLogin } from "vue3-google-login";
import { useRouter } from "vue-router";

const errors = ref(false);
const email = ref("");
const password = ref("");
const authKey = ref("");
const userSession = ref(null);
const router = useRouter();

onMounted(() => {
    const session = localStorage.getItem("audemyUserSession");
    if (session) {
        userSession.value = JSON.parse(session);
    }
});

const showErrorAlert = (message) => {
  errors.value = true;
  errorMessage.value = message;
  resetErrors();
};

const handleApiError = (status, message) => {
  switch(status) {
        case 400:
            showErrorAlert("Bad request: " + (message || "Please check your input"));
            break;
        case 401:
            showErrorAlert("Unauthorized: " + (message || "Invalid credentials"));
            break;
        case 403:
            showErrorAlert("Forbidden: You don't have permission to access this resource");
            break;
        case 404:
            showErrorAlert("Resource not found");
            break;
        case 405:
            showErrorAlert("Method not allowed");
            break;
        case 429:
            showErrorAlert("Too many requests: Please try again later");
            break;
        case 500:
            showErrorAlert("Internal server error. Please try again later.");
            break;
        case 502:
            showErrorAlert("Internal server error. Please try again later.");
            break;
        case 503:
            showErrorAlert("Internal server error. Please try again later.");
            break;
        case 504:
            showErrorAlert("Internal server error. Please try again later.");
            break;
        default:
          showErrorAlert(message || "An error occurred");
  }
};

const login = (event) => {
    event.preventDefault();
    errors.value = false;

    if (!email.value || !password.value) {
        showErrorAlert("Please enter both email and password");
        return;
    }

    fetch("https://audemy-users-api.fly.dev/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: {
                email: email.value,
                password: password.value,
            },
        }),
    })
        .then((response) => {
            authKey.value = response.headers.get("authorization");
            return response.json();
        })
        .then((data) => {
            console.log("Success:", data);
            localStorage.setItem(
                "audemyUserSession",
                JSON.stringify({ token: authKey.value, user: data.user })
            );
            userSession.value = { token: authKey.value, user: data.user };
        })
        .catch((error) => {
            console.error("Error:", error);
      if (error.status) {
        handleApiError(error.status, error.statusText);
      } else {
        showErrorAlert("Connection error: Please check your internet connection");
      }
    });
};

const resetErrors = () => {
    setTimeout(() => {
        errors.value = false;
    }, 4000);
};

const callback = (response) => {
    try {
    console.log("Google OAuth response:", response);
    localStorage.setItem("audemyUserSession", JSON.stringify(response));
    userSession.value = response;
  } catch (error) {
    console.error("Error during Google login:", error);
    showErrorAlert("Failed to process Google login");
  }
};

const logout = () => {
    localStorage.removeItem("audemyUserSession");
    userSession.value = null;
};
</script>

<template>
    <div>
        <!-- Sign In/Out Button -->
        <div class="absolute top-4 left-4">
            <GoogleLogin
                v-if="!userSession"
                :callback="callback"
                class="py-2 px-4 bg-blue-500 text-white rounded shadow"
            >
                Sign In
            </GoogleLogin>
            <button
                v-else
                @click="logout"
                class="py-2 px-4 bg-red-500 text-white rounded shadow"
            >
                Logout
            </button>
        </div>

        <!-- Existing Login Form -->
        <div
            class="w-full h-screen overflow-hidden bg-[#FFDABA] flex justify-between mobile:flex-row"
        >
            <!-- Existing form and design remains unchanged -->
        </div>
    </div>
</template>
