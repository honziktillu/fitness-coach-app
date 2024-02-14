import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import NotFound from "../NotFound/NotFound";
import { Notifications } from "../Notifications/Notifications";
import { Friends } from "../Friends/Friends";
import { Friend } from "../Friends/Friend";
import { Achievements } from "../Achievements/Achievements";
import { Programs } from "../Programs/Programs";
import { Program } from "../Programs/Program";
import { Dishes } from "../Dishes/Dishes";
import { Dish } from "../Dishes/Dish";
import { Exercises } from "../Exercises/Exercises";

export function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/signin" element={<SignIn />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/notifications" element={<Notifications />}/>
                <Route path="/friend" element={<Friend />}/>
                <Route path="/friends" element={<Friends />}/>
                <Route path="/achievements" element={<Achievements />}/>
                <Route path="/programs" element={<Programs />}/>
                <Route path="/program" element={<Program />}/>
                <Route path="/dishes" element={<Dishes />}/>
                <Route path="/dish" element={<Dish />}/>
                <Route path="/exercises" element={<Exercises />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}