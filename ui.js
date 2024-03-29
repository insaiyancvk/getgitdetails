class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    console.log('UI class');

    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <br><br>
            <ul class="list-group">
              <li class="list-group-item"><strong>Username : </strong> ${user.login}</li>
              <li class="list-group-item"><strong>Name : </strong> ${user.name}</li>
              <li class="list-group-item"><strong>Bio : </strong> ${user.bio}</li>
            </ul>
          </div>
        </div>
      </div>


    `;
  }

  showAlert(message, className) {
      this.clearAlert();

      const div = document.createElement('div');
      div.className = className;

      div.appendChild(document.createTextNode(message));

      const container = document.querySelector('.searchContainer');

      const search = document.querySelector('.search');

      container.insertBefore(div, search)

      setTimeout(() => {
        this.clearAlert();
      }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }


}
