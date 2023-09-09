import { Component } from '@angular/core';
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.page.html',
  styleUrls: ['./my-games.page.scss'],
})
export class MyGamesPage {

  selectedImage: any; // to store the image locally
  uploadPercent: any; // for the progress bar

  constructor(private storage: Storage) {}

  onImageChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files[0]) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.selectedImage = reader.result as string;
      };
    }
  }

  uploadImage() {
    if (!this.selectedImage) {
      console.error('No image selected');
      return;
    }

    // This is the part you mentioned to add:
    const storageRef = ref(this.storage, this.selectedImage.name); 
    uploadBytesResumable(storageRef, this.selectedImage);

    const filePath = `uploads/${new Date().getTime()}_${Math.floor(Math.random() * 1000)}`; // random name based on current time and a random number
    const fileStorageRef = ref(this.storage, filePath);

    const task = uploadBytesResumable(fileStorageRef, this.selectedImage);

    // track the state changes of the task to get percentage
    task.on('state_changed', (snapshot) => {
      const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.uploadPercent = percent;
    });

    // handle the upload completion
    task.then((snapshot) => {
      console.log('Uploaded the image!', snapshot);
      // you can get the download URL here if needed
    }).catch((error) => {
      console.error('Failed to upload the image', error);
    });
  }
}
