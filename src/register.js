import React from 'react'

export default function register() {
    return (
        <div class="text-center p-8">
            <h1 class="text-4xl">Register</h1>
            <form action="/register" method="POST">
  <div class=" p-8">
    <label class="pr-4" for="name">Summoner Name</label>
    <input type="text" id="name" name="name" required/>
  </div>
  <div class=" p-8">
    <label class="pr-4" for="email">Email</label>
    <input type="email" id="email" name="email" required/>
  </div>
  <div class=" p-8">
    <label class="pr-4" for="password">Password</label>
    <input type="password" id="password" name="password" required/>
  </div>
  <button class="pb-4" type="submit">Register</button>
</form>
</div>
            
        
    )
}
