document.addEventListener('DOMContentLoaded', function() {
  const avatarImg = document.querySelector('.author__avatar img');
  if (avatarImg) {
    avatarImg.style.width = '60px';
    avatarImg.style.height = '60px';
    avatarImg.style.maxWidth = '60px';
    avatarImg.style.maxHeight = '60px';
    avatarImg.style.border = 'none';
    avatarImg.style.borderRadius = '0';
    avatarImg.style.objectFit = 'cover';
    avatarImg.style.padding = '0';
    avatarImg.style.margin = '0';
  }
  
  const avatarDiv = document.querySelector('.author__avatar');
  if (avatarDiv) {
    avatarDiv.style.width = '60px';
    avatarDiv.style.height = '60px';
  }
}); 