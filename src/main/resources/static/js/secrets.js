<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connected Users</title>
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="stylesheet" href="/css/index.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<div class="container">
  <div class="image-container">
    <img src="https://images.idgesg.net/images/article/2020/04/zoom_video_conferencing_online_meeting_remote_workers_one_user_connected_via_laptop_with_a_grid_of_twelve_participants_on_screen_2400x1600-100837446-large.jpg?auto=webp&quality=85,70" alt="Image">
  </div>

  <div class="main">
    <div class="new-meeting">
      <button id="newMeetingBtn">Create a New Meeting</button>
      <div class="join-meeting">
        <input type="text" placeholder="Meeting ID" id="meetingName">
        <button id="joinMeetingBtn">Join</button>
      </div>
    </div>
    <div class="connected-users">
      <button id="logoutBtn">Logout</button>
      <h2>Connected Users</h2>
      <ul id="userList"></ul>
    </div>
  </div>
</div>
<script src="/js/index.js"></script>
</body>
</html>