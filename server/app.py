from flask import Flask, request, jsonify, abort
from flask_sqlalchemy import SQLAlchemy
from models import db, User, Team
from flask_login import login_user, login_required, logout_user, current_user, LoginManager
from flask_cors import CORS
 
app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db.init_app(app)
login_manager = LoginManager()
login_manager.init_app(app)

# auth!
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.json.get('email')
        password = request.json.get('password')
        
        user = User.query.filter_by(email=email).first() # get user from database
        if user:
            if user.password == password:
                login_user(user, remember=True) # Flask_login function
                return jsonify({'message': 'Login success!'}), 200
                # return redirect(url_for('views.home'))
            else:
                # 401 unauthorized
                return jsonify({'message': 'Incorrect password, try again.'}), 401
        else:
            # 409 conflict
            return jsonify({'message': 'User does not exist!'}), 409

@app.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        email = request.json.get('email')
        firstName = request.json.get('firstName')
        password1 = request.json.get('password1')
        password2 = request.json.get('password2')
        
        user = User.query.filter_by(email=email).first() # get user from database
        if user:
            return jsonify({'message': 'Email already exists.'}), 409
        elif firstName == '':
            return jsonify({'message': 'First name is required!'}), 409
        elif email == '':
            return jsonify({'message': 'Email is required!'}), 409
        elif password1 != password2:
            return jsonify({'message': 'Passwords don\'t match!'}), 409
        else:
            new_user = User(email=email, password=password1, name=firstName)
            db.session.add(new_user)
            db.session.commit()
            login_user(new_user, remember=True) # Flask_login function also for sign up
            return jsonify({'message': 'Account created'}), 201
            # return redirect(url_for('views.home'))
    return "Failed"
            
@app.route('/logout', methods=['POST'])
# @login_required # Flask_login function
def logout():
    logout_user()
    return jsonify({'message': 'Logout success!'}), 200

@app.route('/get-user', methods=['GET'])
def is_authenticated():
    # if current_user.is_authenticated:
    if current_user.is_authenticated:
        return jsonify({'is_authenticated': True}), 200
    else:
        return jsonify({'is_authenticated': False}), 200

with app.app_context():
    db.create_all()   
 
if __name__ == '__main__':
    app.run(debug=True) 