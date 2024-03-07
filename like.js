var likeButton = document.getElementById('likeButton');
var likeCount = document.getElementById('likeCount');
var likeRef = database.ref('likes'); // Thay 'likes' bằng tên thích hợp cho đối tượng bạn đang cần lưu trữ số lượt like

likeButton.addEventListener('click', function() {
  likeRef.transaction(function(currentCount) {
    // Tăng số lượt like lên 1
    return (currentCount || 0) + 1;
  });
});

likeRef.on('value', function(snapshot) {
  // Lắng nghe sự thay đổi của số lượt like và cập nhật hiển thị
  likeCount.textContent = snapshot.val() || 0;
});
