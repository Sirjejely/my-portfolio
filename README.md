# My Portfolio

Welcome to my personal portfolio! This project showcases my skills, experience, and projects as I transition into tech, specializing in **data analysis**, **web design**, and **database management**.

## 🚀 About Me
I am a **Biomedical Engineer** with extensive experience in medical equipment installation, having worked with **TAC Medicals** and **Coscharis Medicals**. Currently, I lecture in the **Computer Engineering Department at the University of Calabar** while transitioning into the tech industry.

### **Skills & Expertise**
- **Data Analysis**: Excel, SPSS, Python, Power BI
- **Web Development**: HTML, CSS, JavaScript, Responsive Design
- **Database Management**: SQL, NoSQL
- **Machine Learning Enthusiast**

## 🎨 Features of the Portfolio
✅ **Modern UI/UX Design** with cool technology-themed colors.  
✅ **Fully Responsive** layout using **Flexbox & Grid**.  
✅ **Personal Branding** with strategically placed professional image.  
✅ **Contact Links** that open in a new tab.  
✅ **Showcase of Projects** demonstrating my skills and expertise.  
✅ **Deployed Live** for accessibility.

## 📁 Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Styling Frameworks**: Flexbox, Grid, Media Queries
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Hosting**: GitHub Pages / Netlify (Frontend), Localhost (Backend)

## 🗄️ MySQL Database Setup

To set up the MySQL database for this project:

1. Install MySQL Server and create the database using this SQL script:

```sql
-- Create database
CREATE DATABASE IF NOT EXISTS myportfolio;

-- Use the database
USE myportfolio;

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255),
    email VARCHAR(255)
);
```

2. Add your MySQL credentials to the `server.js` file:
```js
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'myportfolio'
});
```

3. Install backend dependencies:
```bash
npm install express mysql body-parser cors
```

4. Start the server:
```bash
node server.js
```

## 📦 Project Structure
```
my-portfolio/
│
├── index.html
├── style.css
├── script.js
├── server.js
├── database_setup.sql
├── README.md
└── package.json
```

## 📞 Contact Me
Feel free to reach out for collaborations, job opportunities, or tech discussions:
- [LinkedIn](https://www.linkedin.com/in/chijioke-okoroego-762bba126/)  
- [GitHub](https://github.com/Sirjejely/)  
- [WhatsApp](https://wa.me/+2347035203339)  

---
**Contributions & Feedback**  
I welcome feedback and suggestions! If you have any ideas for improving this portfolio, feel free to reach out.

### ⭐ Don't forget to star this repository if you like it!
