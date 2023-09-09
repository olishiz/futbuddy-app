import { Component, OnInit } from '@angular/core';
import { ref, Storage, uploadBytes } from "@angular/fire/storage";

@Component({
    selector: 'app-my-games',
    templateUrl: './my-games.page.html',
    styleUrls: ['./my-games.page.scss'],
})
export class MyGamesPage implements OnInit {


    selectedImage: any; // to store the image locally
    uploadPercent: any; // for the progress bar
    imagePreview: string; // to store the base64 encoded preview


    constructor(private storage: Storage) {
    }

    ngOnInit() {
    }

    onImageChange(event: any) {
        const reader = new FileReader();

        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            this.selectedImage = file; // Store the actual file object for uploading

            console.log("Image loaded:", this.selectedImage.name); // Log the name of the loaded image

            reader.readAsDataURL(file);

            reader.onload = () => {
                this.imagePreview = reader.result as string;  // Set the base64 encoded preview
            };
        }
    }

    uploadFile(fileInput: HTMLInputElement) {
        if (!fileInput.files || fileInput.files.length === 0) return;

        const file = fileInput.files[0];
        console.log("Image loaded:", file.name);


        const filePath = `images/${file.name}`;
        const storageRef = ref(this.storage, filePath);


        //const task = uploadBytesResumable(storageRef, file);
        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });

    }


}
