import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {NavigationStart, Router} from '@angular/router';
import {ToolService} from '../tool.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  categories = [];
  dropdownToggler = false;
  user: any = {
    token: '',
    username: 'xXx',
  };
  public token: any;

  constructor(private dialog: MatDialog, private router: Router, private auth: AuthService, private toolService: ToolService) {
  }


  ngOnInit(): void {
    this.toolService.getCategory().subscribe(cat => this.categories = cat);
    this.router.events.subscribe((event) => {
      this.user.token = localStorage.getItem('token');
      this.user.username = localStorage.getItem('username');
      if (event instanceof NavigationStart) {
        this.token = this.auth.readToken();
      }
    }, error => console.log(error), () => console.log('Complete'));
  }
   dropToggle(){    this.dropdownToggler = !this.dropdownToggler;   }
   dropClose(){    this.dropdownToggler = false;   }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
    });
  }

  logout() {
    this.auth.logout().subscribe(null, error => console.log(error), () => console.log('Logged out'));
    this.refresh();
    this.router.navigate(['../home']);
  }

  refresh() {
    this.router.navigateByUrl('/contacts', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/home']);
    });
  }
}

// Login component
@Component({
  selector: 'app-login-dialog',
  template: `
    <form [formGroup] = "form">
      <fieldset>
        <legend>Login</legend>
        <label>Login:</label>
        <div class = "form-field">
          <br>
          <input type = "text" name = "text" formControlName = "username" required = "required">
        </div>
        <br>
        <label>Password:</label>
        <div class = "form-field">
          <input name = "password" formControlName = "password"
                 type = "password" autocomplete = "on" required>
        </div>
        <div class = "form-buttons">
          <button class = "button button-login" (keydown.enter) = "login()"
                  (click) = "login()">Login
          </button>
          <button class = "button button-cancel"
                  (click) = "close()">Cancel
          </button>
        </div>
      </fieldset>
    </form>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  token: any;
  username: any;

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {
  }

  login() {
    const user = this.form.value;
    this.authService.login(user.username, user.password)
      .subscribe(
        token => {
          localStorage.setItem('token', token.token);
          localStorage.setItem('username', token.user.username);
          this.dialogRef.close();
          this.router.navigate(['/admin']);
        },
        error => console.error(error.message),
        () => console.log('Logged in'));
  }


  close() {
    this.dialogRef.close();
  }
}
