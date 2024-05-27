import { Routes, Route } from "react-router";
import  DashboardLayout from '../layouts/DashboardLayout';


export default function DashboardRoutes() {
    return (
        <DashboardLayout>
            <Routes>
                <Route path="/dashboard" element={<h1>Test DashboardLayout</h1>} />
            </Routes>
        </DashboardLayout>
    )
}