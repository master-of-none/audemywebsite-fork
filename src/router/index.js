import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home/Home.vue";
import OurProjects from "../pages/OurProjects/OurProjects.vue";
import GameZone from "../pages/GameZone/GameZone.vue";
import LogIn from "../pages/LogIn/LogIn.vue";
import NotFound from "../pages/NotFound/NotFound.vue";
import SignUp from "../pages/SignUp/SignUp.vue";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.vue";
import ResetLinkSent from "../pages/ForgotPassword/ResetLinkSent.vue";
import ResetPassword from "../pages/ResetPassword/ResetPassword.vue";
import ResetConfirm from "../pages/ResetPassword/ResetConfirm.vue";
import ResetLandingPage from "../pages/ResetPassword/ResetLandingPage.vue";
import AboutUs from "../pages/AboutUs/AboutUs.vue";
import Impact from "../pages/Impact/Impact.vue";
import Troubleshooting from "../pages/Troubleshooting/Troubleshooting.vue"
// import SpellingBee from "../pages/GameZone/GameZoneList/SpellingBee/SpellingBee.vue";

const routes = [
    { path: "/home", redirect: "/" },
    { path: "/", name: "Home", component: Home },
    { path: "/game-zone", name: "Game-Zone", component: GameZone },
    { path: "/our-projects", name: "Our-Projects", component: OurProjects },
    { path: "/impact", name: "Impact", component: Impact },
    { path: "/about-us", name: "About-Us", component: AboutUs },
    { path: "/login", name: "LogIn", component: LogIn },
    { path: "/signup", name: "Sign Up", component: SignUp },
    { path: "/forgot-password", name: "Forgot Password", component: ForgotPassword },
    { path: "/reset-link-sent", name: "Reset Link Sent", component: ResetLinkSent },
    { path: "/reset-password", name: "Reset Password", component: ResetPassword },
    { path: "/reset-confirm", name: "Reset Confirm", component: ResetConfirm },
    { path: "/reset-landing-page", name: "Reset Landing Page", component: ResetLandingPage },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
    { path: "/troubleshooting", name: "Troubleshooting Page", component: Troubleshooting },
    {
        path: "/game/addition",
        name: "AdditionGame",
        component: () => import("../pages/GameZone/GameZoneList/AdditionGame.vue"),
    },
    {
        path: "/game/multiplicationmadness",
        name: "MultiplicationMadness",
        component: () => import("../pages/GameZone/GameZoneList/MultiplicationMadness.vue"),
    },
    {
        path: "/game/subtraction",
        name: "SubtractionGame",
        component: () => import("../pages/GameZone/GameZoneList/SubtractionGame.vue"),
    },
    {
        path: "/game/vocabVortex",
        name: "vocabVortex",
        component: () => import("../pages/GameZone/GameZoneList/Vocab.vue"),
    },
    {
        path: "/game/divisionDuel",
        name: "DivisionDuel",
        component: () => import("../pages/GameZone/GameZoneList/DivisionDuel.vue"),
    },
    {
        path: "/game/oddoneout",
        name: "OddOneOut",
        component: () => import("../pages/GameZone/GameZoneList/OddOneOut.vue"),
    },
    {
        path: "/game/polarpairing",
        name: "PolarPairing",
        component: () => import("../pages/GameZone/GameZoneList/PolarPairing.vue"),
    },
    // {
    //     path: "/game/spelling-bee",
    //     name: "SpellingBee",
    //     component: SpellingBee,
    // },
    {
        path: "/game/spellingbee",
        name: "SpellingBee",
        component: () => import("../pages/GameZone/GameZoneList/SpellingBee.vue"),
    },
    {
        path: "/game/carcounting",
        name: "CarCounting",
        component: () => import("../pages/GameZone/GameZoneList/CarCounting.vue"),
    },
    {
        path: "/game/fruitfrenzy",
        name: "FruitFrenzy",
        component: () => import("../pages/GameZone/GameZoneList/FruitFrenzy.vue"),
    },
    {
        path: "/game/monkeymadness",
        name: "MonkeyMadness",
        component: () => import("../pages/GameZone/GameZoneList/MonkeyMadness.vue"),
    },
    {
        path: "/game/shapeshark",
        name: "ShapeShark",
        component: () => import("../pages/GameZone/GameZoneList/ShapeShark.vue"),
    },
    {
        path: "/game/syllableSorting",
        name: "SyllableSorting",
        component: () => import("../pages/GameZone/GameZoneList/SyllableSorting.vue"),
    },
    {
        path: "/game/definitionDetective",
        name: "DefinitionDetective",
        component: () => import("../pages/GameZone/GameZoneList/DefinitionDetective.vue"),
    },
    {
        path: "/game/partofspeech",
        name: "PartOfSpeech",
        component: () => import("../pages/GameZone/GameZoneList/PartOfSpeech.vue"),
    },
    {
        path: "/game/colorgame",
        name: "ColorGame",
        component: () => import("../pages/GameZone/GameZoneList/ColorGame.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
