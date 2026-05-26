window.addEventListener(
    "DOMContentLoaded",
    () => {

        if(localStorage.getItem("theme")==="dark"){
            document.body.classList.add("dark");
        }

        if(document.getElementById("student-announcement")){
            fetchCloudData();
        }

    }
);

function darkMode(){

    const dark =
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        dark ? "dark":"light"
    );
}

async function dbPublishAnnouncement(){

    const input =
    document.getElementById(
        "new-announcement"
    );

    const { error } =
    await supabaseClient
    .from("announcements")
    .insert([
        {
            content: input.value
        }
    ]);

    if(error){

        alert("Error");

    }else{

        alert("Announcement Added");

        input.value="";
    }
}

async function dbPublishAssignment(){

    const input =
    document.getElementById(
        "new-assignment"
    );

    const { error } =
    await supabaseClient
    .from("assignments")
    .insert([
        {
            title: input.value
        }
    ]);

    if(error){

        alert("Error");

    }else{

        alert("Assignment Added");

        input.value="";
    }
}

async function fetchCloudData(){

    const notice =
    document.getElementById(
        "student-announcement"
    );

    const assignment =
    document.getElementById(
        "student-assignment"
    );

    const { data: announcements } =
    await supabaseClient
    .from("announcements")
    .select("*")
    .limit(1);

    if(announcements.length>0){

        notice.innerText =
        announcements[0].content;
    }

    const { data: assignments } =
    await supabaseClient
    .from("assignments")
    .select("*")
    .limit(1);

    if(assignments.length>0){

        assignment.innerText =
        assignments[0].title;
    }
}