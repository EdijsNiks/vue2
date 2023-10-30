<template>
    <div class="song-list">
        <SongFilterComponent @filter="setActiveFilter" />
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Artist</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="song in sortedSongs" :key="song.id">
                    <td>{{ song.song }}</td>
                    <td>{{ song.artist }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import SongFilterComponent from "@/components/SongFilterComponent.vue";
import { store } from "@/store";

export default {
    components: {
        SongFilterComponent,
    },
    computed: {
        allSongs() {
            return store.state.all_songs;
        },
        sortedSongs() {
            let sorted = [...this.allSongs];
            if (this.activeFilter === "song") {
                sorted.sort((a, b) => a.song.localeCompare(b.song));
            } else if (this.activeFilter === "artist") {
                sorted.sort((a, b) => a.artist.localeCompare(b.artist));
            }
            return sorted;
        },
    },
    data() {
        return {
            activeFilter: "none",
        };
    },
    methods: {
        setActiveFilter(filter) {
            this.activeFilter = filter;
        },
    },
};
</script>

<style scoped>
.song-list {
    margin: 20px;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    text-align: left;
    padding: 8px;
}

th {
    background-color: #5f685f;
    color: white;
}

tr:nth-child(even) {
    background-color: #886666;
}
</style>