angular.module('starter.controllers', [])
    //

// .controller('BorrowCtrl', function($scope, $stateParams,  $cordovaBarcodeScanner) {
//   $scope.header = 'ยืมอุปกรณ์';

//    $scope.startScan = function() {
//         $cordovaBarcodeScanner
//             .scan()
//             .then(function(barcodeData) {

//                 $scope.result = barcodeData;

//             }, function(error) {
//                 alert(error);
//             });
//     }
// })

.value('valueToken', 999)

.factory('sharedData', function() {
    var value = 0;

    return {
        getValue: function() {
            return value;
        },
        setValue: function(v) {
            value = v;
        },
        token: '*'
    };
})

///// start new controller
.controller('mainCtrl', ['$scope', '$http', '$ionicLoading', '$ionicSlideBoxDelegate', function($scope, $http, $ionicLoading, $ionicSlideBoxDelegate) {
        $scope.header = 'ยินดีต้อนรับ ร้าน Mee Shop';

        $services_url = 'http://www.medeeem.com/meeshop/index.php/services/';

        $scope.image_url = 'http://www.medeeem.com/meeshop/assets';
        $scope.image_company = 'uploads/files/about';

        $scope.image_prouducts = 'uploads/files/slideshow';

        $ionicLoading.show();
        // connnect api service to shop 
        $http.get("http://www.medeeem.com/meeshop/index.php/services/company")
            .success(function(response) {
                //$ionicLoading.hide();

                $scope.company = response;
                //console.log($scope.company[0].logo_img);
                console.log($scope.company);

                // connnect api service to load slideshow
                $http.get("http://www.medeeem.com/meeshop/index.php/services/slide")
                    .success(function(result) {
                        $ionicLoading.hide();

                        console.log(result);
                        $scope.slides = result;
                        //console.log($scope.slide[0].logo_img);
                        //console.log($scope.slides);
                        //alert("บันทึกรายการยืม เรียบร้อย");
                        $ionicSlideBoxDelegate.update();

                    });

                // end connenct api service

            });

        // end connenct api service



        $scope.nextSlide = function() {
            $ionicSlideBoxDelegate.next();
        }

    }])
    // end main controller


.controller('productCtrl', ['$scope', '$http', '$ionicLoading', function($scope, $http, $ionicLoading) {
        $scope.header = 'สินค้าของเรา';

        $services_url = 'http://www.medeeem.com/meeshop/index.php/services/';

        $scope.image_url = 'http://www.medeeem.com/meeshop/assets';
        $scope.image_prouducts = 'uploads/files/product';

        $ionicLoading.show();
        // connnect api service to add borrow transaction
        $http.get("http://www.medeeem.com/meeshop/index.php/services/product_list")
            .success(function(response) {
                $ionicLoading.hide();

                $scope.products = response;
                //console.log($scope.company[0].logo_img);
                console.log($scope.products);
                //alert("บันทึกรายการยืม เรียบร้อย");
              

            });

        // end connenct api service
        //$scope.catQuery.cat_id = "";
        // start set product category filter
        $scope.setTypeFilterAllProduct = function() {
             $scope.catQuery == "";
            alert($scope.catQuery);
        }

        $scope.setTypeFilterBestSale = function() {
            $scope.catQuery = "1";
            alert($scope.catQuery);
        }

        $scope.setTypeFilterPromotion = function() {
            $scope.catQuery = "2";
            alert($scope.catQuery);
        }

        $scope.setTypeFilterRecomment = function() {
                $scope.catQuery = "3";
                alert($scope.catQuery);
            }
            // end of function set product filter

    }])
    // end of product controller

.controller('productDetailCtrl', ['$scope', '$stateParams', '$http', '$ionicLoading', function($scope, $stateParams, $http, $ionicLoading) {
        $scope.header = 'รายละเอียดสินค้า';

        var product_id = $stateParams.productId;
        console.log(product_id);

        $services_url = 'http://www.medeeem.com/meeshop/index.php/services/';

        $scope.image_url = 'http://www.medeeem.com/meeshop/assets';
        $scope.image_prouducts = 'uploads/files/product';

        $ionicLoading.show();
        // connnect api service to add borrow transaction
        $http.get("http://www.medeeem.com/meeshop/index.php/services/product_detail?product_id=" + product_id)
            .success(function(response) {
                $ionicLoading.hide();

                $scope.product = response;
                //console.log($scope.company[0].logo_img);
                console.log($scope.product);
                //alert("บันทึกรายการยืม เรียบร้อย");

            });

        // end connenct api service

    }])
    // end of promotion controller

.controller('promotionCtrl',  ['$scope', '$http', '$ionicLoading', function($scope, $http, $ionicLoading) {
        $scope.header = 'โปรโมชั่นใหม่';

        $services_url = 'http://www.medeeem.com/meeshop/index.php/services/';

        $scope.image_url = 'http://www.medeeem.com/meeshop/assets';
        $scope.image_prouducts = 'uploads/files/banner';

        $ionicLoading.show();
        //connnect api service to load banners ads
        $http.get("http://www.medeeem.com/meeshop/index.php/services/banner")
            .success(function(response) {
                $ionicLoading.hide();

                $scope.banners = response;
                console.log($scope.banners[0].banner_id);
                console.log($scope.banners);
                //alert("บันทึกรายการยืม เรียบร้อย");
              

            });

        // end connenct api service

    }])
    // end of promotion controller

.controller('categoryCtrl', ['$scope', function($scope) {
        $scope.header = 'หมวดหมู่สินค้า';
    }])
    // end of catefgory controller

.controller('shopCtrl', ['$scope', function($scope) {
    $scope.header = 'ร้านค้า';
}]);
// end of catefgory controller

///// end of new controller
