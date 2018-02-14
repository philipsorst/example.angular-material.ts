import {Component, OnInit} from "@angular/core";
import {TitleService} from "../title/title.service";
import * as faker from 'faker';
import {FormControl} from "@angular/forms";

@Component({
    templateUrl: './chip.component.html'
})
export class ChipComponent implements OnInit
{
    public availableColors: string[] = [];

    public filteredColors: string[];

    public colors: string[] = [];

    public formControl: FormControl = new FormControl();

    constructor(private titleService: TitleService)
    {
    }

    /**
     * @override
     */
    public ngOnInit()
    {
        this.titleService.setTitle('Chip');
        for (let i = 0; i < 10; i++) {
            this.availableColors.push(faker.commerce.color());
        }
        this.filteredColors = this.availableColors;

        this.formControl.valueChanges.subscribe(value => {
            this.filterColors(value);
        });
    }

    public removeColor(color: string)
    {
        let index = this.colors.indexOf(color);
        if (index >= 0) {
            this.colors.splice(index, 1);
        }
    }

    public addColor(color: string, input: any): void
    {
        this.colors.push(color);
        this.formControl.setValue(null);
        if (input) {
            input.value = '';
        }
    }

    private filterColors(value: string)
    {
        this.filteredColors = this.availableColors.filter((color: string) => {
            if (null == value || '' == value.trim()) {
                return false;
            }

            return color.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        });
    }
}
