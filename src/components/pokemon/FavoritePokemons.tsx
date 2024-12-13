import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";


const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favoritePokemons = JSON.parse(
        localStorage.getItem('favorites') ?? '[]'
    )

    return favoritePokemons;
}

export const FavoritePokemons = () => {

    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons())
    return (
        <div class="grid grid=cols-2 sm:grid-cols4">
            <For each={ pokemons()}>
                {
                    pokemon => <h1>{pokemon.name}</h1>
                }
            </For>  
        </div>
    )
} 