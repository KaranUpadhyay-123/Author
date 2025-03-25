import { Component } from "@angular/core";

export class ConferenceManagementComponent {
  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
  // Author Registration Data
  author = {
    fullName: '',
    email: '',
    phone: '',
    affiliation: '',
    password: '',
    confirmPassword: ''
  };

  // Paper Submission Data
  paper = {
    title: '',
    abstract: '',
    file: null as File | null
  };

  // Conference Registration Data
  conference = {
    fullName: '',
    email: '',
    ticketType: '',
    paymentMethod: ''
  };

  // Login Data
  login = {
    email: '',
    password: ''
  };

  // Dropdown options
  affiliations: string[] = ['University', 'Organization'];
  ticketTypes: string[] = ['General', 'Student', 'Speaker'];
  paymentMethods: string[] = ['Credit', 'Debit', 'UPI'];

  // Handle file upload
  onFileSelected(event: any, type: string) {
    const file = event.target.files[0];
    if (file) {
      if (type === 'paper') {
        this.paper.file = file;
      }
    }
  }

  // Author Registration Submission
  onRegisterAuthor() {
    if (this.author.password !== this.author.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Author Registered:', this.author);
    alert('Author Registration Successful!');
  }

  // Paper Submission
  onSubmitPaper() {
    if (!this.paper.file) {
      alert('Please upload a valid file.');
      return;
    }
    console.log('Paper Submitted:', this.paper);
    alert('Paper Submission Successful!');
  }

  // Conference Registration Submission
  onRegisterConference() {
    console.log('Conference Registered:', this.conference);
    alert('Conference Registration Successful!');
  }

  // Login Submission
  onLogin() {
    console.log('User Logged In:', this.login);
    alert('Login Successful!');
  }
}

