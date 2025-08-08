// Timeline data structure
const timelineData = [

    {
        date: "2022",
        title: "Rust",
        description: "Rust is a systems programming language that is designed to be safe, concurrent, and fast. It is a statically typed language that is designed to be memory-safe and thread-safe. It is a compiled language that is designed to be fast and efficient."
    },
    {
        date: "2019",
        title: "FPGA",
        description: "FPGA is a programmable logic device that is designed to be fast and efficient. It is a statically typed language that is designed to be memory-safe and thread-safe. It is a compiled language that is designed to be fast and efficient."
    },
    {
        date: "2018",
        title: "Deep Learning / AI",
        description: "Deep Learning / AI is a field of machine learning that is designed to be fast and efficient. It is a statically typed language that is designed to be memory-safe and thread-safe. It is a compiled language that is designed to be fast and efficient."
    },
    {
        date: "2016",
        title: "Functional Programming in Scala – Martin Odersky",
        description: "Functional Programming in Scala – Martin Odersky is a field of machine learning that is designed to be fast and efficient. It is a statically typed language that is designed to be memory-safe and thread-safe. It is a compiled language that is designed to be fast and efficient."
    },
    {
        date: "2016",
        title: "Machine Learning - Stanford",
        description: "Machine Learning - Stanford is a field of machine learning that is designed to be fast and efficient. It is a statically typed language that is designed to be memory-safe and thread-safe. It is a compiled language that is designed to be fast and efficient."
    },
    {
        date: "2015",
        title: "Mobile app for iPhone",
        description: "Mobile app for iPhone is a field of machine learning that is designed to be fast and efficient. It is a statically typed language that is designed to be memory-safe and thread-safe. It is a compiled language that is designed to be fast and efficient."
    },
    {
        date: "2013",
        title: "Enterprise Architect",
        description: "Enterprise Architect is a field of machine learning that is designed to be fast and efficient. It is a statically typed language that is designed to be memory-safe and thread-safe. It is a compiled language that is designed to be fast and efficient."
    },
    {
        date: "2010",
        title: "CUDA - HPSC centre Dublin",
        description: "CUDA - HPSC centre Dublin is a field of machine learning that is designed to be fast and efficient. It is a statically typed language that is designed to be memory-safe and thread-safe. It is a compiled language that is designed to be fast and efficient."
    },
    {
        date: "2005",
        title: "COSMIC-FFP – software size measurement methodology",
        description: "COSMIC-FFP – software size measurement methodology is a field of machine learning that is designed to be fast and efficient. It is a statically typed language that is designed to be memory-safe and thread-safe. It is a compiled language that is designed to be fast and efficient."
    },
    {
        date: "2002",
        title: "Unified Change Management process implementation",
        description: "Unified Change Management process implementation is a field of machine learning that is designed to be fast and efficient. It is a statically typed language that is designed to be memory-safe and thread-safe. It is a compiled language that is designed to be fast and efficient."
    },
    {
        date: "2001",
        title: "Rational Unified Process",
        description: "Rational Unified Process is a field of machine learning that is designed to be fast and efficient. It is a statically typed language that is designed to be memory-safe and thread-safe. It is a compiled language that is designed to be fast and efficient."
    },
    {
        date: "2000",
        title: "Cryptography for TV platform (STB)",
        description: "Cryptography for TV platform (STB) is a field of machine learning that is designed to be fast and efficient. It is a statically typed language that is designed to be memory-safe and thread-safe. It is a compiled language that is designed to be fast and efficient."
    },
    {
        date: "1999-2001",
        title: "Wroclaw University of Technology, PhD in Cryptology and Cryptography [unfinished]",
        description: "Wroclaw University of Technology, PhD in Cryptology and Cryptography [unfinished] is a field of machine learning that is designed to be fast and efficient. It is a statically typed language that is designed to be memory-safe and thread-safe. It is a compiled language that is designed to be fast and efficient."
    },
    {
        date: "1994-1999",
        title: "Wroclaw University of Technology. Master degree in computer science: Computer systems and networks.",
        description: "Wroclaw University of Technology. Master degree in computer science: Computer systems and networks. is a field of machine learning that is designed to be fast and efficient. It is a statically typed language that is designed to be memory-safe and thread-safe. It is a compiled language that is designed to be fast and efficient."
    }
];

// Function to create timeline items
function createTimelineItems() {
    const timelineContainer = $('.timeline-container');
    
    timelineData.forEach(item => {
        const timelineItem = `
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-date">${item.date}</div>
                    <h3 class="timeline-title">${item.title}</h3>
                    <p class="timeline-description">${item.description}</p>
                </div>
            </div>
        `;
        timelineContainer.append(timelineItem);
    });
}

// Initialize timeline when document is ready
$(document).ready(function() {
    createTimelineItems();
}); 