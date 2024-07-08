
# Site Lookup

Site Lookup is a web application that allows users to perform WHOIS lookups for domain names. The application provides detailed WHOIS information, including registration details, expiration dates, and contact information.

# Table of Contents

1. [Installation](#installation)
2. [Technologies Used](#technologies-used)
2. [Usage](#usage)
## 🔗 Installation

Clone the repository:

```
git clone https://github.com/GelacioCode/whoistesting.git
```

Navigate to the project directory:

Copy code
```
cd whoistesting
```

Create a .env file inside whoistesting folder and copy this values
```
PORT=5000
REACT_APP_WHOIS_URL=https://www.whoisxmlapi.com/whoisserver/WhoisService
REACT_APP_API_KEY=at_6KRCjOzMn8ipu3XVZnH5famSUqdd8
```

Install the dependencies:

```
npm install
```

Start Application:

```
npm run start
```




## Technologies Used

**Client:** React: For building the user interface.
            TypeScript: For type safety and better code quality.
            SCSS: For styling the application.

**Server:** Node.js: For running the server.
            WHOIS API: For fetching WHOIS data.

##Usage

**Performing a WHOIS Lookup**

**Navigate to the home page of the application.
Enter a domain name in the search bar.
Click the "Search" button to fetch the WHOIS information.
Viewing WHOIS Results**

**After performing a lookup, the WHOIS information will be displayed.
The information includes registration details, expiration dates, and contact information.
Using Advanced Search Features**

**Utilize filters to narrow down the search results.
Sort results based on specific criteria such as registration date or expiration date.**