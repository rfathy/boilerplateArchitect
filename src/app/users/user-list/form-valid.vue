<template>
    <div class="form-valid">
        <h3 class="mt10">Validations</h3>
        <ValidationObserver ref="observer" v-slot="{ invalid }"  @submit.prevent="submit()" class="row">
            <div class="col col-md-4 mt10">
                <validation-provider  class="form-group mb10" rules="required" v-slot="{ errors }">
                    <label>required</label>
                    <input v-model="value" name="myinput" type="text" class="form-control" />
                    <span class="err">{{ errors[0] }}</span>
                </validation-provider>
                <ValidationProvider  class="form-group mb10" rules="secret" v-slot="{ errors }">
                    <label>= example</label>
                    <input v-model="compared" type="text" class="form-control">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider  class="form-group mb10" rules="required|email" v-slot="{ errors }">
                    <label>email format/required</label>
                    <input v-model="email" type="text" class="form-control">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="col col-md-4 mt10">
                <ValidationProvider  class="form-group mb10" rules="required|min:5" v-slot="{ errors }">
                    <label>min (5)</label>
                    <input v-model="min" type="text" class="form-control">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider  class="form-group mb10" rules="required|max:5" v-slot="{ errors }">
                    <label>max (5)</label>
                    <input v-model="max" type="text" class="form-control">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="col col-md-4 mt10">
                <label>Password</label>
                <ValidationProvider  class="form-group mb10"
                    rules="required|password:confirmation" v-slot="{ errors }">
                    <input v-model="password" type="password" class="form-control">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
                <label>Confirm Password</label>
                <ValidationProvider class="form-group mb10" name="confirmation" rules="required" v-slot="{ errors }">
                    <input v-model="confirm" type="password" class="form-control">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <br />
            <div class="col col-md-4 mt10">
                <button class="btn btn-primary" @click="submit">Save</button>
            </div>
        </ValidationObserver>
        <h3 class="mt10">Direvtives</h3>
        <ValidationObserver class="row">
            <div class="col col-md-4 mt10">
                <validation-provider class="form-group mb10">
                    <label>Only En</label>
                    <input  type="text" v-only-en class="form-control" />
                </validation-provider>
                <validation-provider class="form-group mb10">
                    <label>Only Ar</label>
                    <input  type="text" v-only-ar class="form-control" />
                </validation-provider>
            </div>
            <div class="col col-md-4 mt10">
                <validation-provider class="form-group mb10">
                    <label>Only No.</label>
                    <input  type="text" v-only-numeric class="form-control" />
                </validation-provider>
                <validation-provider class="form-group mb10">
                    <label>Allow Decimal</label>
                    <input  type="text" v-allow-decimal="2" class="form-control" />
                </validation-provider>
            </div>
        </ValidationObserver>
    </div> 
</template>
<script src="./form-valid.js"></script>

<style lang="scss" scoped>@import '../theme/users.scss'</style>