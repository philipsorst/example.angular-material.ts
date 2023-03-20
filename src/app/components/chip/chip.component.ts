import {Component, OnInit} from "@angular/core";
import {faker} from '@faker-js/faker';
import {FormControl} from "@angular/forms";
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {TitleService} from '../../title/title.service';

@Component({
    templateUrl: './chip.component.html'
})
export class ChipComponent implements OnInit
{
    public availableColors: string[] = [];

    public filteredColors$!: Observable<string[]>;

    public colors: string[] = [];

    public formControl: FormControl = new FormControl();

    public separatorKeysCodes: number[] = [ENTER, COMMA];

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

        this.filteredColors$ = this.formControl.valueChanges.pipe(
            startWith(''),
            map(value => this.availableColors.filter((color: string) => {
                if (null == value || '' == value.trim()) {
                    return true;
                }

                return color.toLowerCase().indexOf(value.toLowerCase()) !== -1;
            }))
        )
    }

    public removeColor(color: string)
    {
        const index = this.colors.indexOf(color);
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
}
