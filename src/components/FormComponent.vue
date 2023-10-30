<template>
    <div class="form">
        <form>
            <div class="form-row">
                <label for="first-name">First name:</label>
                <input
                    type="text"
                    id="first-name"
                    :value="user.first_name"
                    :disabled="disabled"
                    @input="updateFirstName"
                    :class="{ disabled: disabled }"
                />
            </div>
            <div class="form-row">
                <label for="last-name">Last name:</label>
                <input
                    type="text"
                    id="last-name"
                    :value="user.last_name"
                    :disabled="disabled"
                    @input="updateLastName"
                    :class="{ disabled: disabled }"
                />
            </div>
            <div class="form-row">
                <label for="student-code">Student code:</label>
                <input
                    type="text"
                    id="student-code"
                    :value="user.student_code"
                    :disabled="disabled"
                    @input="updateStudentCode"
                    :class="{ disabled: disabled }"
                />
            </div>
        </form>
        <div class="form-row">
            <label>Logged in at:</label>
            <ul>
                <li v-for="timestamp in loggedAt" :key="timestamp">
                    {{ timestamp }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        loggedAt() {
            return this.$store.state.user.logged_at;
        },
    },
    methods: {
        updateFirstName(event) {
            this.$store.dispatch('updateFirstName', event.target.value);
        },
        updateLastName(event) {
            this.$store.dispatch('updateLastName', event.target.value);
        },
        updateStudentCode(event) {
            this.$store.dispatch('updateStudentCode', event.target.value);
        },
    },
};
</script>

<style scoped>
.form {
    margin-top: 20px;
}

.form-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
}

label {
    margin-right: 10px;
    font-weight: bold;
}

input {
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #f2f2f2;
    font-size: 16px;
    width: 200px;
}

input.disabled {
    background-color: #ddd;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

li {
    margin: 5px 0;
    font-size: 14px;
}
</style>