class Github {

  constructor() {

    this.client_id = 'Iv1.f8de1fe6f9395d83';
    this.client_secret = '6407f16f06aeb56593172b0c6b1cdf702f3d44f3';
    this.count = 5;
    this.repos_sort = 'created: asc';

  }

  async getUser(user) {

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    return {profile}

  }
  
}
