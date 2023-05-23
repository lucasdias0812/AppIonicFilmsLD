export interface ISerie{
  nome: string;
  lancamento: string;
  classificacao: number;
  temporadas: number;
  cartaz: string;
  generos: string[];
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}
