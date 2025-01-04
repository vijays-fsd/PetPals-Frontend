## Pet Adoption Platform Frontend

This document provides guidelines and instructions for setting up, developing, and deploying the frontend for the Pet Adoption Platform.

### Tech Stack

- **React**: For building the user interface.
- **TailwindCSS**: For styling and UI components.
- **Axios**: For making API requests to the backend.
- **React Router**: For navigation and routing.
- **Context API**: For state management.

### Features

1. **Pet Listings**
   - Display pets with detailed profiles including photos, videos, and attributes (name, breed, age, size, etc.).
   - Advanced search and filter options for breed, size, age, and location.

2. **User Features**
   - Secure registration and login.
   - Profile management, including saved pets and application tracking.
   - Notifications for updates on new listings or application status.

3. **Application Management**
   - Submit adoption applications.
   - View and track application status.

4. **Shelter and Foster Features**
   - Messaging system for communication.
   - Appointment scheduling for pet meet-and-greets.

5. **User Reviews**
   - Write and display reviews for shelters and pets.

### Prerequisites

1. **Node.js** (>=14.x)
2. **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-name/pet-adoption-frontend.git
   ```
2. Navigate to the frontend directory:
   ```bash
   cd pet-adoption-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser at `http://localhost:3000`.

### Project Structure

```
├── src
│   ├── components      # Reusable UI components
│   ├── pages           # Page-level components
│   ├── hooks           # Custom React hooks
│   ├── utils           # Utility functions
│   ├── context         # Context API for global state
│   ├── styles          # TailwindCSS configuration
│   └── App.js          # Main App component
```

### Styling

- **TailwindCSS**:
  Tailwind is pre-configured for this project. Customize styles in the `tailwind.config.js` file.

### API Integration

- All API requests are managed using **Axios**.
- Configure the API base URL in the `.env` file:
  ```env
  REACT_APP_API_BASE_URL=http://localhost:5000
  ```

### Build for Production

To create a production-ready build:
```bash
npm run build
```
The build files will be located in the `build/` directory.

---