import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { BseService } from '../bse.service';

@Component({
    templateUrl: './bse.component.html',
    styleUrls: ['./bse.component.scss'],
    styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
    providers: [MessageService,ConfirmationService]
})
export class BseComponent implements OnInit {

    productDialog: boolean = false;

    products: any;

    product: any;

    selectedProducts: any[] = [];

    submitted: boolean = false;

    statuses: any[] = [];
    constructor(private bseservice: BseService, private confirmationService: ConfirmationService) { }

    ngOnInit() {
        this.bseservice.getData().
        subscribe((res : any) => {
          this.products = res.user;
        })
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected user?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter((val: any) => !this.selectedProducts.includes(val));
                this.selectedProducts = [];
                // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
            }
        });
    }
    editProduct(i: number) {
        this.product = this.products[i];
        this.productDialog = true;
    }

    deleteProduct(i: number) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products.splice(i,1);
                this.product = {};
                // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted'});
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }
    
    saveProduct() {
        this.submitted = true;
        this.products.push(this.product);
        // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created',});
      
    }
    updateProduct(i: number){
        this.products[i] = this.product;
        // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated',});
        }

    // findIndexById(id: string): number {
    //     let index = -1;
    //     for (let i = 0; i < this.products.length; i++) {
    //         if (this.products[i].id === id) {
    //             index = i;
    //             break;
    //         }
    //     }

    //     return index;
    // }

    // createId(): string {
    //     let id = '';
    //     var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     for ( var i = 0; i < 5; i++ ) {
    //         id += chars.charAt(Math.floor(Math.random() * chars.length));
    //     }
    //     return id;
    // }
}

