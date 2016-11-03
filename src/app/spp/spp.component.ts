import { Component, Output} from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';

interface Student {
    nis:number,
    nama:string,
    nama_wali:string,
    kelas:string,
    tahun_masuk:string,
    tagihan:any[]
}

@Component({
    templateUrl: 'spp-form.html',
    styles: [`
    :host >>> .completer-input {
        background: transparent !important;
        width: 100% !important;
        border: none;
        border-color: transparent;
    }
    :host /deep/ .completer-dropdown {
        width: 100% !important;
        margin-top:12px !important;
        position: relative !important;
        background-color: #000000;
        border: 1px solid black;
        }
  `],
})
export class SppComponent {
    nis: string; 
    jumlah:number = 0;

    private searchStr: string;
    private dataService: CompleterData;
    public searchData = STUDENTS;
    constructor(private completerService: CompleterService) {
        this.dataService = completerService.local(this.searchData, 'nis', 'nis');
        console.log(this.selectNis);
    }

    selectNis(nis: string){
        console.log(nis);
    }

    jumlahTagihan(jumlah_tagihan:number, event:any){
        if(event.target.checked)
            this.jumlah = this.jumlah + jumlah_tagihan;
        else
            this.jumlah = this.jumlah - jumlah_tagihan;
    }
}

var STUDENTS: Student[] = [
    {
        "nis":123,
        "nama":"Isgi Arriza",
        "nama_wali":"Mujib Fahmi",
        "kelas":"3A",
        "tahun_masuk":"2016",
        "tagihan":[
            {
                "jumlah":200000,
                "bulan":"September",
            },
            {
                "jumlah":200000,
                "bulan":"Oktober",
            },
            {
                "jumlah":200000,
                "bulan":"November",
            }
        ]
    },
    {
        "nis":124,
        "nama":"Tofa Riyadi",
        "nama_wali":"Riyadi",
        "kelas":"3B",
        "tahun_masuk":"2016",
        "tagihan":[
            {
                "jumlah":200000,
                "bulan":"September",
            },
            {
                "jumlah":200000,
                "bulan":"Oktober",
            },
            {
                "jumlah":200000,
                "bulan":"November",
            }
        ]
    }
];