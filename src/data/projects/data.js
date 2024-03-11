const projects = [
    {
        id: 1,
        name: 'File encryption',
        summary: 'XOR file encryption tool using C and Windows API. It uses Sqlite3 to store the encrypted files.',
        description: 'Explore an advanced level of file security through the XOR File Encryption Tool, a meticulously crafted C-based application featuring a polished WindowsAPI interface. This tool streamlines the encryption and decryption process using the robust XOR encryption method, complemented by a seamless key management system facilitated by an SQLite3 database.',
        image: '/assets/file-encryption_ex.png',
        languages: ['C', 'Windows API', 'Sqlite3'],
        link: 'https://github.com/ttmassa/file-encryption'
    },
    {
        id: 2,
        name: 'Currency converter',
        summary: 'Real-time currency converter using Java and JavaFX. It uses the free API from openexchangerates.org.',
        description: 'Discover a streamlined currency conversion experience with the Java Currency Converter, a Java-based application featuring an intuitive JavaFX graphic interface. Utilizing real-time exchange rates from the openexchangerates.org free API, this app simplifies the conversion process. Select your desired currencies from a drag-and-drop list, input the amount, and instantly view the converted result in the adjacent text field. With a swift and user-friendly design, this currency converter offers speed and simplicity in every conversion. The project is also Maven-enabled, ensuring seamless management of dependencies and efficient build processes.',
        image: '/assets/currency-converter_image.png',
        languages: ['Java', 'JavaFX'],
        link: 'https://github.com/ttmassa/currency-converter'
    },
    {
        id: 3,
        name: 'Tenzies game',
        summary: 'A mobile tenziez game to play alone, or with friends! ',
        description: `Embark on a challenging gaming experience with the ReactJS Tenzies Game – a single-page website that offers both entertainment and a learning journey. This project, while seemingly simple, serves as a showcase for my adept use of ReactJS tools. The game features a timer that kicks off when the player starts, recording the user's best time in the browser's localStorage. This enables the computer to track and display the user's top performance, creating an engaging competition with oneself. Through the implementation of ReactJS state, effect, and local storage functionalities, this project not only provides an interactive gaming experience but also highlights my proficiency in utilizing key ReactJS tools for efficient and effective web development.`,
        image: '/assets/tenzies-game_image.png',
        languages: ['ReactJS', 'HTML', 'CSS'],
        link: 'https://github.com/ttmassa/tenzies-game'
    },
    {
        id: 4,
        name: 'Balasido',
        summary: 'Travel through a fantastic world and try to find the exit!',
        description: 'Embark on the exhilarating journey of Balasido, a browser game meticulously crafted with Typescript. Control a cat through a 3D world, conquering a challenging parkour course with the goal of reaching the end flawlessly. Noteworthy is that while I did not personally design the graphical interface, this project stands as a testament to my proficiency in managing complex projects, featuring imported designs for an enhanced visual experience. Explore the seamless blend of creativity and technical finesse in the captivating world of Balasido.',
        image: '/assets/balasido_image.png',
        languages: ['TypeScript', 'HTML', 'CSS'],
        link: 'https://github.com/ttmassa/Balasido'
    },
    {
        id: 5,
        name: 'To do list manager',
        summary: 'Straightforward to-do list manager using C.',
        description: 'Meet the C-based To-Do List Manager, your go-to command-line solution for task management. Add, remove, and modify tasks with ease while enjoying real-time updates on task details. This project marks my debut in command-line program development, showcasing efficiency and user-friendliness in task management at its core.',
        image: '/assets/to-do-list-manager_image.png',
        languages: ['C'],
        link: 'https://github.com/ttmassa/to-do-list-manager'
    },
    {
        id: 6,
        name: '#Van Life',
        summary: 'Complete van renting website using ReactJS.',
        description: 'Explore the #Van Life ReactJS website – a spa with a seamless routing system crafted using ReactJS built-in functions such as BrowserRouter and NavLink. Through the development of this project, I delved into the intricacies of building a website with multiple routes, gaining a profound understanding of advanced ReactJS tools. Immerse yourself in the world of #Van Life and witness the fusion of efficient routing and advanced ReactJS functionality in a captivating web experience.',
        image: '/assets/van-life_image.png',
        languages: ['ReactJS', 'HTML', 'CSS'],
        link: 'https://github.com/ttmassa/van-life'
    }
]

export default projects