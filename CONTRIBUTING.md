# Contributing to MaidFinder

This guide explains how to push code to the MaidFinder repository and contribute to the project.

## Prerequisites

Before you can push code to this repository, ensure you have:

1. **Git installed** on your local machine
2. **Node.js and npm** (for frontend development)
3. **Python 3.x and pip** (for backend development)
4. **Access to the repository** (either as a collaborator or by forking)

## Repository Structure

```
maidfinder/
├── frontend/          # React.js frontend application
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   └── package.json  # Dependencies and scripts
├── backend/          # Flask backend API
│   ├── app.py        # Main application file
│   └── requirements.txt # Python dependencies
├── README.md         # Project documentation
└── .git/            # Git repository metadata
```

## Development Setup

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/mighty145/maidfinder.git
cd maidfinder
```

### 2. Set Up the Frontend

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

The frontend will be available at `http://localhost:3000`

### 3. Set Up the Backend

```bash
# Navigate to backend directory
cd backend

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the Flask application
python app.py
```

The backend API will be available at `http://localhost:5000`

## Git Workflow for Pushing Code

### 1. Check Current Status

Before making changes, always check your current git status:

```bash
git status
git branch
```

### 2. Create a New Branch

Always create a new branch for your changes:

```bash
# Create and switch to a new feature branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description
```

### 3. Make Your Changes

Edit the files you need to modify:
- Frontend changes: Edit files in `frontend/src/`
- Backend changes: Edit files in `backend/`
- Documentation: Edit markdown files

### 4. Test Your Changes

Before committing, test your changes:

```bash
# For frontend
cd frontend
npm start

# For backend
cd backend
python app.py
```

### 5. Stage and Commit Changes

```bash
# Check what files have changed
git status

# Add specific files
git add filename1 filename2

# Or add all changes (be careful!)
git add .

# Commit with a descriptive message
git commit -m "Add feature: description of what you added"

# Or for bug fixes
git commit -m "Fix: description of what you fixed"
```

### 6. Push Your Branch

```bash
# Push your branch to the remote repository
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

1. Go to the GitHub repository: https://github.com/mighty145/maidfinder
2. Click "Compare & pull request" for your branch
3. Fill in the pull request description
4. Submit the pull request for review

## Common Git Commands

### Checking Status and History

```bash
git status                    # Check current status
git log --oneline            # View commit history
git branch                   # List local branches
git remote -v                # Check remote repositories
```

### Syncing with Remote

```bash
git fetch origin             # Fetch latest changes
git pull origin main         # Pull latest changes from main branch
git merge main               # Merge main into your current branch
```

### Fixing Mistakes

```bash
git checkout -- filename    # Discard changes to a file
git reset HEAD filename      # Unstage a file
git commit --amend          # Modify the last commit message
```

## Best Practices

### Commit Messages

Use clear, descriptive commit messages:
- **Good**: "Add user registration form validation"
- **Good**: "Fix: Handle empty search results properly"
- **Bad**: "Updated stuff"
- **Bad**: "Fixed bug"

### Code Organization

- Keep commits focused on a single change or feature
- Test your code before committing
- Don't commit sensitive information (API keys, passwords)
- Follow the existing code style and conventions

### Branch Naming

Use descriptive branch names:
- `feature/user-authentication`
- `fix/form-validation-error`
- `update/readme-documentation`

## Troubleshooting

### Common Issues

**1. Permission Denied**
```bash
# If you don't have push access, fork the repository first
# Then clone your fork instead of the original
```

**2. Merge Conflicts**
```bash
git status                   # See which files have conflicts
# Edit the conflicted files to resolve issues
git add resolved-file
git commit -m "Resolve merge conflict"
```

**3. Forgot to Create Branch**
```bash
# If you made changes on main, create a new branch
git checkout -b feature/your-feature
# Your changes will move to the new branch
```

### Getting Help

- Check the repository issues: https://github.com/mighty145/maidfinder/issues
- Review existing pull requests for examples
- Consult Git documentation: https://git-scm.com/doc

## Project-Specific Notes

### Frontend Development

- The frontend uses React with Material-UI components
- Main components are in `frontend/src/`
- Start development server with `npm start`
- Build for production with `npm run build`

### Backend Development

- The backend uses Flask framework
- Main application logic is in `backend/app.py`
- Install dependencies with `pip install -r requirements.txt`
- Run development server with `python app.py`

## Contact

For questions about contributing, please:
1. Check existing issues and documentation
2. Create a new issue for questions
3. Contact the repository maintainers

Happy coding! 🚀