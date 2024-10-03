import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MetaService } from './meta.service';
import { Meta } from '../models/meta';

describe('MetaService', () => {
  let service: MetaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MetaService]
    });
    service = TestBed.inject(MetaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save a meta', () => {
    const dummyMeta: Meta = { id: 1, nome: 'Meta 1', descricao: 'Teste Meta', valor: 100, grupoid: 1 };

    service.salvarMeta(dummyMeta).subscribe(meta => {
      expect(meta).toEqual(dummyMeta);
    });

    const req = httpMock.expectOne('/api/metas');
    expect(req.request.method).toBe('POST');
    req.flush(dummyMeta);
  });

  it('should delete a meta', () => {
    const metaId = 1;

    service.deletarMeta(metaId).subscribe(response => {
      expect(response).toBeUndefined();
    });

    const req = httpMock.expectOne(`/api/metas/${metaId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  it('should list metas', () => {
    const dummyMetas: Meta[] = [
      { id: 1, nome: 'Meta 1', descricao: 'Teste Meta 1', valor: 100, grupoid: 1 },
      { id: 2, nome: 'Meta 2', descricao: 'Teste Meta 2', valor: 200, grupoid: 2 }
    ];

    service.listarMetas().subscribe(metas => {
      expect(metas.length).toBe(2);
      expect(metas).toEqual(dummyMetas);
    });

    const req = httpMock.expectOne('/api/metas');
    expect(req.request.method).toBe('GET');
    req.flush(dummyMetas);
  });
});
