import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GetMakeModelsFactory } from '../../interfaces/handlers/getMakeModels';
import { model } from '../../interfaces/model';
import { ModelsService } from '../../services/models.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss'],
})
export class ModelsComponent implements OnInit {
  public currentModels: model[] = [];

  constructor(private route: ActivatedRoute, private modelsService: ModelsService) {}

  ngOnInit(): void {
    debugger;
    this.route.queryParams.subscribe((params) => {
      this.modelsService
        .getMakeModels(params['id'])
        .pipe(map((modelsHandler) => new GetMakeModelsFactory(modelsHandler)))
        .subscribe((modelsResponse) => {
          this.currentModels = modelsResponse.results;
        });
    });
  }
}
