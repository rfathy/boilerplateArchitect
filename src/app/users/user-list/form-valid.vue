<template>
    <div class="form-valid">
        <!-- <Loader v-if="isLoading" />
        <h3 class="mt10">{{ $t('Users.Validation') }}</h3>
        <ValidationObserver ref="observer" v-slot="{ invalid }"  @submit.prevent="submit()" class="row">
            <div class="col col-md-4 mt10">
                <validation-provider  class="form-group mb10" rules="required" v-slot="{ errors }">

                    <label>{{ $t('Users.Required') }}</label>
                    <input v-model="value" name="myinput" type="text" class="form-control" />
                    <span class="err">{{ errors[0] }}</span>
                </validation-provider>
                <ValidationProvider  class="form-group mb10" rules="secret" v-slot="{ errors }">
                    <label>= {{ $t('Users.Example') }} </label>
                    <input v-model="compared" type="text" class="form-control">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider  class="form-group mb10" rules="required|email" v-slot="{ errors }">
                    <label>{{ $t('Users.Email') }}</label>
                    <input v-model="email" type="text" class="form-control">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="col col-md-4 mt10">
                <ValidationProvider  class="form-group mb10" rules="required|min:5" v-slot="{ errors }">
                    <label>{{ $t('Users.Min5') }}</label>
                    <input v-model="min" type="text" class="form-control">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider  class="form-group mb10" rules="required|max:5" v-slot="{ errors }">
                    <label>{{ $t('Users.Max5') }}</label>
                    <input v-model="max" type="text" class="form-control">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
                
            </div>
            <div class="col col-md-4 mt10">
                <label>{{ $t('Users.Password') }}</label>
                <ValidationProvider  class="form-group mb10"
                    rules="required|password:confirmation" v-slot="{ errors }">
                    <input v-model="password" type="password" class="form-control">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
                <label>{{ $t('Users.ConfirmPassword') }}</label>
                <ValidationProvider class="form-group mb10" name="confirmation" rules="required" v-slot="{ errors }">
                    <input v-model="confirm" type="password" class="form-control">
                    <span class="err">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <br />
            <div class="col col-md-4 mt10">
                <button class="btn btn-primary" @click="submit" @shortkey="submit" v-shortkey="['alt', 's']">{{ $t('Users.Save') }}</button>
            </div>
        </ValidationObserver> -->

        <div class="row">
            <div class="col col-md-4 mt10">
                <h3>2-way data binding: {{binding}}</h3>
                <input v-model="binding" type="text" class="form-control">
            </div>
            <div class="col col-md-4 mt10">
                <h3>parent to child data binding (props)</h3>
                <input v-model="name" type="text" class="form-control">
                <ChildTwo :name=name />
            </div>
            <div class="col col-md-4 mt10">
                <h3>child to parent data binding (emit)</h3>
                <span>{{parentData}}</span>
                <Child :inputData.sync="parentData" />
            </div>
        </div>


        <!-- <h3 class="mt10">{{ $t('Users.Direvtives') }}</h3>
        <ValidationObserver class="row">
            <div class="col col-md-4 mt10">
                <validation-provider class="form-group mb10">
                    <label>{{ $t('Users.OnlyEn') }}</label>
                    <input  type="text" v-only-en class="form-control" />
                </validation-provider>
                <validation-provider class="form-group mb10">
                    <label>{{ $t('Users.OnlyAr') }}</label>
                    <input  type="text" v-only-ar class="form-control" />
                </validation-provider>
            </div>
            <div class="col col-md-4 mt10">
                <validation-provider class="form-group mb10">
                    <label>{{ $t('Users.OnlyNum') }}</label>
                    <input  type="text" v-only-numeric class="form-control" />
                </validation-provider>
                <validation-provider class="form-group mb10">
                    <label>{{ $t('Users.AllowDecimal') }}</label>
                    <input  type="text" v-allow-decimal="2" class="form-control" />
                </validation-provider>
            </div>
        </ValidationObserver> -->
    </div> 
</template>
<script src="./form-valid.js"></script>