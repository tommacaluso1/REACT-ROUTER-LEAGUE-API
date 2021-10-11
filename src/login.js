import React from 'react'

export default function login() {
    return (
        <div class="text-center p-8">
            <h1 class="text-4xl">Login</h1>
            <form action="/login" method="POST">
  <div class=" p-8">
    <label class="pr-4" for="email">Email</label>
    <input type="email" id="email" name="email" required/>
  </div>
  <div class=" p-8">
    <label class="pr-4" for="password">Password</label>
    <input type="password" id="password" name="password" required/>
  </div>
  <button class="pb-4" type="submit">Login</button>
</form>
<a href="/register">Register</a>
            
        </div>
    )
}

