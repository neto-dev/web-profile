Profile::App.controllers :base do
  get :index, :map => '/' do
    @posts = Post.last(3)
    @stylesheets = ["app/base"]
    @title = "Home"
    ### MENU OPTIONS:
    # 1 = Inicio
    # 2 = Ernesto
    # 3 = Portafolio
    # 4 = Servicios
    # 5 = Blog
    # 6 = Videos
    # 7 = Entrenamiento
    # 8 = Contacto
    @menu = 1
    render 'index'
  end
end