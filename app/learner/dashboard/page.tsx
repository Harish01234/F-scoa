"use client";

import { useStudentAuthStore } from "@/store/student-auth-store";
import React, { useEffect } from "react";

function LearnerDashboard() {
  const accessToken = useStudentAuthStore((state) => state.accessToken);
  const isExpiredFn = useStudentAuthStore((state) => state.isExpired);

  const isExpired = isExpiredFn();

  /* ================= DEBUG LOGS ================= */
  useEffect(() => {
    console.log("====== DASHBOARD DEBUG ======");
    console.log("Access Token:", accessToken);
    console.log("Is Expired:", isExpired);
    console.log("================================");
  }, [accessToken, isExpired]);

  /* ================= STATES ================= */

  if (!accessToken) {
    console.log("No token found → user not logged in");
    return <h1 className="text-center mt-10">Not Logged In ❌</h1>;
  }

  if (isExpired) {
    console.log("Token expired → show session expired");
    return <h1 className="text-center mt-10">Session Expired ⏳</h1>;
  }

  /* ================= MAIN UI ================= */

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Learner Dashboard</h1>

      <div className="bg-admin-card border border-border p-4 rounded-lg">
        <p className="text-sm text-muted mb-2">Access Token:</p>
        <p className="text-xs break-all text-accent">
          {accessToken}
        </p>
      </div>
    </div>
  );
}

export default LearnerDashboard;