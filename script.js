 var qData = [
  { 
    q: "WHO কোন রোগের জন্য নবজাতক ও শিশুদের প্রথম চিকিৎসা অনুমোদন দিয়েছে?", 
    a: "ম্যালেরিয়া", 
    opts: ["ডেঙ্গু", "ম্যালেরিয়া", "টিবি", "কোভিড-১৯"] 
  },
  { 
    q: "Artemether-lumefantrine কোন রোগের চিকিৎসা?", 
    a: "ম্যালেরিয়া", 
    opts: ["ডায়াবেটিস", "ক্যান্সার", "ম্যালেরিয়া", "অ্যাজমা"] 
  },
  { 
    q: "নবজাতক ও শিশুদের জন্য WHO-এর অনুমোদিত চিকিৎসার মূল উদ্দেশ্য কী?", 
    a: "মৃত্যুহার কমানো", 
    opts: ["ওজন বৃদ্ধি", "রোগ প্রতিরোধ", "টিকা প্রদান", "মৃত্যুহার কমানো"] 
  },
  { 
    q: "দিল্লিতে রোবোটিক অর্থোপেডিক সিস্টেম কোথায় চালু হয়েছে?", 
    a: "Cantonment General Hospital", 
    opts: ["AIIMS", "Safdarjung Hospital", "Cantonment General Hospital", "Apollo Hospital"] 
  },
  { 
    q: "Robotic Orthopaedic System কে উদ্বোধন করেছেন?", 
    a: "Defence Secretary", 
    opts: ["Defence Secretary", "President", "Prime Minister", "Health Minister"] 
  },
  { 
    q: "রোবোটিক মেডিক্যাল সিস্টেমের প্রধান সুবিধা কী?", 
    a: "Surgery-র নির্ভুলতা বৃদ্ধি", 
    opts: ["কম খরচ", "দ্রুত চিকিৎসা", "ওষুধ কম লাগে", "Surgery-র নির্ভুলতা বৃদ্ধি"] 
  },
  { 
    q: "ভারতের প্রথম intra-city drone delivery কোথায় সফল হয়েছে?", 
    a: "হায়দরাবাদ", 
    opts: ["দিল্লি", "মুম্বাই", "বেঙ্গালুরু", "হায়দরাবাদ"] 
  },
  { 
    q: "Drone delivery ট্রায়াল কারা পরিচালনা করেছে?", 
    a: "FedEx ও IIT Madras", 
    opts: ["ISRO ও DRDO", "FedEx ও IIT Madras", "Amazon ও Flipkart", "Google ও Meta"] 
  },
  { 
    q: "Drone delivery-এর মূল উদ্দেশ্য কী?", 
    a: "দ্রুত logistics পরিষেবা", 
    opts: ["দ্রুত logistics পরিষেবা", "বিনোদন", "সামরিক ব্যবহার", "কৃষি উন্নয়ন"] 
  },
  { 
    q: "SCO Defence Ministers’ Meeting-এ ভারতকে কে প্রতিনিধিত্ব করছেন?", 
    a: "Rajnath Singh", 
    opts: ["Narendra Modi", "Amit Shah", "Rajnath Singh", "S Jaishankar"] 
  },
  { 
    q: "SCO বৈঠক কোথায় অনুষ্ঠিত হচ্ছে?", 
    a: "Bishkek", 
    opts: ["তাশখন্দ", "Bishkek", "কাবুল", "বেইজিং"] 
  },
  { 
    q: "SCO-এর পূর্ণরূপ কী?", 
    a: "Shanghai Cooperation Organisation", 
    opts: ["South Cooperation Organization", "Strategic Cooperation Organization", "Shanghai Cooperation Organisation", "Security Council Organization"] 
  },
  { 
    q: "প্রথম বিশ্বযুদ্ধে কতজন ভারতীয় সেনা শহীদ হন?", 
    a: "33,000", 
    opts: ["20,000", "25,000", "30,000", "33,000"] 
  },
  { 
    q: "Basra Memorial কোথায় অবস্থিত?", 
    a: "ইরাক", 
    opts: ["ইরান", "ইরাক", "তুরস্ক", "সিরিয়া"] 
  },
  { 
    q: "NITI Aayog-এর নতুন ভাইস-চেয়ারম্যান কে হচ্ছেন?", 
    a: "Ashok Lahiri", 
    opts: ["Raghuram Rajan", "Ashok Lahiri", "Urjit Patel", "Arvind Subramanian"] 
  },
  { 
    q: "Ashok Lahiri পূর্বে কোন পদে ছিলেন?", 
    a: "Chief Economic Adviser", 
    opts: ["RBI Governor", "Finance Minister", "Chief Economic Adviser", "Planning Commission Head"] 
  },
  { 
    q: "ভারতের বায়ো-ইকোনমি 2047 সালে কত হবে বলে অনুমান করা হয়েছে?", 
    a: "$1 trillion", 
    opts: ["$1 trillion", "$750 billion", "$500 billion", "$2 trillion"] 
  },
  { 
    q: "Bio-economy সম্পর্কে ঘোষণা কে করেছেন?", 
    a: "Jitendra Singh", 
    opts: ["Narendra Modi", "Nirmala Sitharaman", "Jitendra Singh", "Piyush Goyal"] 
  },
  { 
    q: "SARAS Aajeevika Mela কোন মন্ত্রণালয়ের অধীনে?", 
    a: "Rural Development Ministry", 
    opts: ["Agriculture Ministry", "Rural Development Ministry", "Finance Ministry", "Commerce Ministry"] 
  },
  { 
    q: "SARAS Mela-এর প্রধান উদ্দেশ্য কী?", 
    a: "গ্রামীণ পণ্য প্রচার", 
    opts: ["শিল্প উন্নয়ন", "স্বাস্থ্য সচেতনতা", "শিক্ষা উন্নয়ন", "গ্রামীণ পণ্য প্রচার"] 
  },
  { 
    q: "Kartavya Bhawan-2-এ নতুন অফিস কে উদ্বোধন করেছেন?", 
    a: "Arjun Ram Meghwal", 
    opts: ["Narendra Modi", "Amit Shah", "Arjun Ram Meghwal", "Rajnath Singh"] 
  },
  { 
    q: "Arjun Ram Meghwal কোন মন্ত্রণালয়ের সঙ্গে যুক্ত?", 
    a: "Law and Justice", 
    opts: ["Finance", "Law and Justice", "Defence", "Home Affairs"] 
  },
  { 
    q: "International Seed Day কবে পালিত হয়?", 
    a: "26 এপ্রিল", 
    opts: ["25 এপ্রিল", "26 এপ্রিল", "27 এপ্রিল", "28 এপ্রিল"] 
  },
  { 
    q: "World Malaria Day কবে পালিত হয়?", 
    a: "25 এপ্রিল", 
    opts: ["25 এপ্রিল", "26 এপ্রিল", "27 এপ্রিল", "27 এপ্রিল"] 
  },
  { 
    q: "World Malaria Day কে ঘোষণা করেছে?", 
    a: "WHO", 
    opts: ["UN", "WHO", "UNICEF", "World Bank"] 
  }
];
var curQ = 0, userScore = 0, qTimer, secLeft = 15;

function beginQuizNow() {
    document.getElementById("start-area").style.display = "none";
    document.getElementById("quiz-main-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    if (curQ >= qData.length) { showResult(); return; }
    secLeft = 15;
    document.getElementById("timer-box").innerHTML = secLeft;
    document.getElementById("quiz-progress").innerHTML = "প্রশ্ন: " + (curQ + 1) + "/" + qData.length;
    document.getElementById("main-q-text").innerHTML = qData[curQ].q;
    
    var optsHtml = "";
    qData[curQ].opts.forEach(opt => {
        optsHtml += `<button class="opt-btn" onclick="checkAnswer(this, '${opt}')">${opt}</button>`;
    });
    document.getElementById("main-opt-container").innerHTML = optsHtml;
    startTimer();
}

function startTimer() {
    clearInterval(qTimer);
    qTimer = setInterval(() => {
        secLeft--;
        document.getElementById("timer-box").innerHTML = secLeft;
        if (secLeft <= 0) { 
            clearInterval(qTimer);
            checkAnswer(null, ""); 
        }
    }, 1000);
}

function checkAnswer(btn, selected) {
    clearInterval(qTimer);
    var correct = qData[curQ].a.trim();
    var btns = document.getElementsByClassName("opt-btn");
    
    
    for (let b of btns) {
        b.disabled = true;
        if (b.innerText.trim() === correct) {
            b.classList.add("correct-ans");
        }
    }

    
    if (selected.trim() === correct) {
        userScore++;
        document.getElementById("score-val").innerText = userScore;
    } else if (btn) {
        btn.classList.add("wrong-ans");
    }

    curQ++;
    setTimeout(loadQuestion, 1500);
}

function showResult() {
    document.getElementById("question-area").style.display = "none";
    document.getElementById("result-area").style.display = "block";
    
    var finalScore = userScore;
    var totalQ = qData.length;
    var feedback = "";
    var color = "";

    
    if (finalScore === totalQ) {
        feedback = "Outstanding! 🌟";
        color = "#388e3c";
    } else if (finalScore >= totalQ * 0.8) {
        feedback = "Very Good! 👏";
        color = "#0d47a1";
    } else if (finalScore >= totalQ * 0.5) {
        feedback = "Good! 👍";
        color = "#f57c00";
    } else {
        feedback = "Need More Practice! 📚";
        color = "#d32f2f";
    }

    document.getElementById("res-score").innerHTML = `
        <div style="color: ${color}; font-weight: bold; margin-bottom: 10px;">${feedback}</div>
        <div style="font-size: 2.5rem;">${finalScore} / ${totalQ}</div>
    `;
}