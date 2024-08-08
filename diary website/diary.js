const saveEntryButton = document.getElementById("save-entry");
        const diaryEntries = document.getElementById("diaryentries");

        function saving(){
            var datto= document.getElementById("dattoo");
            var dttz=document.getElementById("dateday");
            var date=getdates();
            var day=getdays();
            datto.innerHTML=("DATE : "+date+"<br/>"+" "+"DAY : "+day);  
            dttz.innerHTML=("DATE : "+date+"  "+" DAY : "+day);  
        }    

        function getdates(){
            const x = new Date();
            var dt,m,y,dyn,dy,array;
            dt=x.getDate();
            m = x.getMonth() + 1;
            //y = x.getYear();
            y="2024"
            var date=dt+"/"+m+"/"+y;
            //console.log("year= ")

            return date;
        }

        function getdays(){
            const x = new Date();
            dayno=x.getDay();
            array = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            dy = array[dayno];
            return dy;
        }


        function save() {
            var date=getdates();
            const content = document.getElementById("page").value;

            // Check if localStorage is available
            if (typeof(Storage) !== "undefined") {
                // Retrieve existing entries or initialize an empty array
                let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

                // Add the new entry
                entries.push({ date, content });

                // Store the updated entries in localStorage
                localStorage.setItem("diaryEntries", JSON.stringify(entries));

                // Clear the form
                document.getElementById("page").value = "";

                // Reload and display entries
                displayEntries();
            } else {
                alert("Sorry, your browser does not support local storage. Entries cannot be saved.");
            }
        }

        // Function to display saved entries
        function displayEntries() {
            const entryList = document.getElementById("diary-entry");
            entryList.innerHTML = "";

            // Retrieve saved entries from localStorage
            const entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

            // Display entries in a list
            entries.forEach(entry => {

                
                const listItem = document.createElement("li");
                listItem.innerHTML = `        <div class="diary-entryy">
                    <span class="date">${entry.date}</span>
                    <p>${entry.content}</p>
                </div>`;
                entryList.appendChild(listItem);
            });
        }



        // Initial display of entries
        displayEntries();

        // Save entries on window unload (exit)
        window.addEventListener("beforeunload", () => {
            const entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
            localStorage.setItem("diaryEntries", JSON.stringify(entries));
        });

        function clearData(){
            if (typeof(Storage) !== "undefined") {
                // Clear the local storage
                localStorage.removeItem("diaryEntries");

                // Clear the displayed entries
                const entryList = document.getElementById("diary-entry");
                entryList.innerHTML = "";
            }
            else{
                alert("Sorry, your browser does not support local storage.");
            }
        }

        function dress(){
            var date=getdates();
            var dy=getdays();
            dttz.innerHTML=("DATE : "+date+"  "+" DAY : "+dy);
            var l1=0; 

            var listing=document.getElementById("detail");
            if(dy=="Tuesday"||dy=="Wednesday"||dy=="Friday"){
                listing.innerHTML="TODAY WEAR LAB UNIFORM";
            }else{
                listing.innerHTML="TODAY DON'T WEAR LAB UNIFORM";
            }
        }

        

