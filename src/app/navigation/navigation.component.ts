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
  user: any;
  username;
  public token: any;
  categories = [];
  constructor(private dialog: MatDialog, private router: Router, private auth: AuthService, private toolService: ToolService) {
  }


  ngOnInit(): void {
    this.toolService.getCategory().subscribe(cat => this.categories = cat);
    console.log(this.categories[0])
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.token = this.auth.readToken();
        this.user = localStorage;
      }
    }, error => console.log(error), () => console.log('Complete'));
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user = result;
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['../home']);
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
        <label>Password:</label>
        <div class = "form-field">
          <br>
          <input name = "password" formControlName = "password"
                 type = "password" required>
        </div>
        <div class = "form-buttons">
          <button class = "button button-login" (keydown) = "login()"
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
          localStorage.setItem('token', token.token), localStorage.setItem('username', token.user.username), localStorage.setItem('fullToken', token);
          this.dialogRef.close();
          this.router.navigate(['../admin']);
        },
        error => console.error(error.message),
        () => console.log('Logged in'));
  }


  close() {
    this.dialogRef.close();
  }
}
