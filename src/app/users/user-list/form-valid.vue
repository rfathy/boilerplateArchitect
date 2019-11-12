<template>
    <div class="form-valid">
        <ValidationObserver ref="observer" v-slot="{ invalid }"  @submit.prevent="submit()">
            <div style="display:inline-block;width:40%;vertical-align:top">
                <validation-provider rules="required" v-slot="{ errors }">
                    <label>required</label>
                    <input v-model="value" name="myinput" type="text" />
                    <span class="err">{{ errors[0] }}</span>
                </validation-provider>
                <ValidationProvider rules="secret" v-slot="{ errors }">
                    <label>= example</label>
                    <input v-model="compared" type="text">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider rules="required|email" v-slot="{ errors }">
                    <label>email format/required</label>
                    <input v-model="email" type="text">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider rules="required|min:5" v-slot="{ errors }">
                    <label>min (5)</label>
                    <input v-model="min" type="text">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider rules="required|max:5" v-slot="{ errors }">
                    <label>max (5)</label>
                    <input v-model="max" type="text">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div style="display:inline-block;width:40%;vertical-align:top">
                <label>Password</label>
                <ValidationProvider
                    rules="required|password:confirmation" v-slot="{ errors }">
                    <input v-model="password" type="password">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
                <label>Confirm Password</label>
                <ValidationProvider  name="confirmation" rules="required" v-slot="{ errors }">
                    <input v-model="confirm" type="password">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <br />
            <button @click="submit">Save</button>
        </ValidationObserver>
    </div> 
</template>
<script src="./form-valid.js"></script>

<style lang="scss" scoped>@import '../theme/users.scss'</style>