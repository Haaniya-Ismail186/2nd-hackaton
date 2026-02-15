// Jab poora page load ho jaye tab JS chale
document.addEventListener('DOMContentLoaded', () => {
    
    const studentBtn = document.getElementById('studentBtn');
    const adminBtn = document.getElementById('adminBtn');
    const loginForm = document.getElementById('loginForm');

    let selectedRole = 'student'; // Default selection

    // 1. Student Button Logic
    if(studentBtn) {
        studentBtn.onclick = function() {
            studentBtn.classList.add('active');
            adminBtn.classList.remove('active');
            selectedRole = 'student';
            console.log("Student selected");
        };
    }

    // 2. Admin Button Logic
    if(adminBtn) {
        adminBtn.onclick = function() {
            adminBtn.classList.add('active');
            studentBtn.classList.remove('active');
            selectedRole = 'admin';
            console.log("Admin selected");
        };
    }

    // 3. Form Submit & Redirect Logic
    if(loginForm) {
        loginForm.onsubmit = function(e) {
            e.preventDefault(); // Page refresh hone se rokta hai
            
            if (selectedRole === 'student') {
                window.location.href = "dashboard.html"; // Dashboard file ka naam check karein
            } else {
                alert("Admin login abhi active nahi hai.");
            }
        };
    }
});